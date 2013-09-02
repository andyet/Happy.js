# EDC's Fork of happy.js #
  The original maintainers/developers of happy.js seem to be on permant leave (2+ years as of this date). 
This is EDC's attempt at maintain a Happy.js fork that integrates outstanding pull requests to the main branch that aren't integrated, and fix any bugs or issues that arise in our usage of happy.js

### Issues to solve ###
 * In many use cases the validation function of the form fails to fire because when clicking, the sequence necessary to register a click never occurs because it is interrupted by a blur event. [stackexchange.com](http://stackoverflow.com/questions/4084780/how-should-i-fire-javascript-blur-event-after-click-event-that-causes-the-blur)

### Contributions to this fork ###
* @StanAngelOff -> issue with mobile browser and zepto that doesn't stop a form with errors from being submitted
* @gilluminate -> added his pull request to allow '+' in email addresses.


-------------------------------------------------------------------

##Happy.js – are your forms happy? Just ask 'em!
[happyjs.com](http://happyjs.com)
