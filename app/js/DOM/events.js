// Section: JavaScript in the Browser: DOM and Events Fundamentals

// Lecture: Handling Click Events
document.querySelector('textarea').addEventListener('onload', function() {
   const textBoxVal = document.querySelector('textarea.form-control').value;
   document.querySelector('.massage-box').innerHTML = textBoxVal;
});

document.querySelector('#selectForm').addEventListener('change', function() {
  const selectVal = document.querySelector('#selectForm').value;
  // document.querySelector('.massage-box').innerHTML = 'My Higher Education is ' +selectVal;
  document.querySelector('.massage-box').innerHTML = `My Higher Education is ${selectVal}`;
});

function IamFocus() {
  document.querySelector('.input-text').focus();
}
function IamBlur() {
  document.querySelector('.input-text').blur();
}
