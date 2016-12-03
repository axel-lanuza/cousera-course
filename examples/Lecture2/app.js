Appmodule = (function(undefinde, window){
  //Variables declaration and DOM Cache
  let student = {
    name: "",
    type: "student"
  };
  var nameInput = document.getElementById('name'),
      outputDiv = document.getElementById('output');

  function init() {
      document.addEventListener('DOMContentLoaded', contentLoaded(nameInput));
  }

  function contentLoaded(selector, event) {
    selector.addEventListener("keyup", keyUp);
  }

  function keyUp(event) {
    calculateNumericOutput();
  }

  function calculateNumericOutput() {
      student.name = nameInput.value;

      let totalNameValue = 0;
      for (var i = 0; i < student.name.length; i++) {
        totalNameValue += student.name.charCodeAt(i);
      }

    // Insert result into page
    let output = "Total Numeric value of person's name is " + totalNameValue;
    outputDiv.innerText = output;
  }

  return {
    Init: init
  }
}());

let callback = Appmodule.Init();

if(
    document.readyState = 'complete' ||
    (document.readyState !== 'loading' && !document.documentElment.doScroll)
) {
  callback;
} else {
  document.addEventListener("DOMContentLoaded", callback);
}
