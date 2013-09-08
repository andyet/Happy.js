# EDC's Fork of happy.js #
  The original maintainers/developers of happy.js seem to be on permant leave (2+ years as of this date). 
This is EDC's attempt at maintain a Happy.js fork that integrates outstanding pull requests to the main branch and fix any bugs or issues that arises in our usage of happy.js.

### Issues to solve ###
 * In many of our use-cases the validation function of the form fails to fire upon submit because when clicking, the sequence necessary to register a click never occurs since it is interrupted by a blur event that occurs as after moving focus from an input/happy.js registered memory to the submit button. [stackexchange.com](http://stackoverflow.com/questions/4084780/how-should-i-fire-javascript-blur-event-after-click-event-that-causes-the-blur)

### Contributions to this fork ###
* @StanAngelOff -> issue with mobile browser and zepto that doesn't stop a form with errors from being submitted
* @gilluminate -> added his pull request to allow '+' in email addresses.


-------------------------------------------------------------------

##Happy.js – are your forms happy? Just ask 'em!
[happyjs.com](http://happyjs.com)
