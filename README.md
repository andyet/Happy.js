#Forked:

Forked to work with backbone.js: 

-Provides a .now() call to do validation without
form submission since in backbone.js most form submissions are handled by custom
code instead of its default behavior.

-Provides an .unHappy() callback in the options hash.

-Provides a 'scope' input to take in your backbone view's scoped el.

-Don't revalidate upon blur; do it on submit.

-Clear out old errors.

<pre>
this.$el.find('#id').isHappy({
    unHappy: function() {}, // Callback when validation fails.
    scope : this.el         // Pass in the scoped el for this validation form
}).now();		    // Call now() when you want to run the validation.
</pre>

-------------------------------------------------------------------

#Happy.js – are your forms happy? Just ask 'em!

[happyjs.com](http://happyjs.com)
