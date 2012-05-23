(function($){
  function trim(el) {
    return (''.trim) ? el.val().trim() : $.trim(el.val());
  }
  // @thomas: forked: provide a means to do validation without actual submission
  $.fn.now = function(onSuccess) {
      var that = this;
      var overrideSubmit = function(event) {

          event.preventDefault();
          
          // do this for now
          var result = $(that).find(".unhappyMessage").length === 0;
          
          onSuccess(result);
      };
      
      $(this).unbind('submit', overrideSubmit);
      $(this).bind('submit', overrideSubmit);
      
      $(this).submit();
  };
  
  $.fn.isHappy = function (config) {
    var fields = [], item;
    
    function getError(error) {
      return $('<span id="'+error.id+'" class="unhappyMessage">'+error.message+'</span>');
    }
    function handleSubmit() {
      var errors = false, i, l;
      for (i = 0, l = fields.length; i < l; i += 1) {
        if (!fields[i].testValid(true)) {
          errors = true;
        }
      }
      if (errors) {
        if (isFunction(config.unHappy)) config.unHappy();
        return false;
      } else if (config.testMode) {
        if (window.console) console.warn('would have submitted');
        return false;
      }
    }
    function isFunction (obj) {
      return !!(obj && obj.constructor && obj.call && obj.apply);
    }
    function processField(opts, selector) {
      var field = $(selector),
        error = {
          message: opts.message,
          id: selector.slice(1) + '_unhappy'
        },
        errorEl = $(error.id).length > 0 ? $(error.id) : getError(error);
        
      fields.push(field);
      field.testValid = function (submit) {
        var val,
          el = $(this),
          gotFunc,
          error = false,
          temp, 
          required = !!el.get(0).attributes.getNamedItem('required') || opts.required,
          password = (field.attr('type') === 'password'),
          arg = isFunction(opts.arg) ? opts.arg() : opts.arg,
          clearError = function() {
              temp = errorEl.get(0);
              // this is for zepto
              if (temp.parentNode) {
                temp.parentNode.removeChild(temp);
              }
              // @thomas: forked: always clear error and not just append
              var id = errorEl.get(0).id;
              $(el.get(0).parentNode).find('#'+id).remove();
              
              el.removeClass('unhappy');
          };
        
        // clean it or trim it
        if (isFunction(opts.clean)) {
          val = opts.clean(el.val());
        } else if (!opts.trim && !password) {
          val = trim(el);
        } else {
          val = el.val();
        }
        
        // write it back to the field
        el.val(val);
        
        // get the value
        gotFunc = ((val.length > 0 || required === 'sometimes') && isFunction(opts.test));
        
        // check if we've got an error on our hands
        if (submit === true && required === true && val.length === 0) {
          error = true;
        } else if (gotFunc) {
          error = !opts.test(val, arg);
        }
        
        if (error) {
          clearError();
          
          el.addClass('unhappy').before(errorEl);
          return false;
        } else {
          clearError();
          return true;
        }
      };
      field.bind(config.when || 'blur', field.testValid);
    }
    
    for (item in config.fields) {
      processField(config.fields[item], item);
    }
    
    if (config.submitButton) {
      $(config.submitButton).click(handleSubmit);
    } else {
      this.unbind('submit'); // @thomas :forked: don't re-register listeners
      
      this.bind('submit', handleSubmit);
    }
    return this;
  };
})(this.jQuery || this.Zepto);
