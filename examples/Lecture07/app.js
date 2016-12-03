let AppModule = (function () {
  'use strict';

  let elem = document.getElementById('target'),
      elem2 = document.querySelector('[ng-app]');

  let init = function() {
    console.log(elem2);
    console.log(elem2.getAttribute('ng-app'));
  }

  return {
    Init : init,
  }
})();

let callback = AppModule.Init();

if(
    document.readyState = 'complete' ||
    (document.readyState !== 'loading' && !document.documentElment.doScroll)
) {
  callback;
} else {
  document.addEventListener('DOMContentLoaded', callback);
}
