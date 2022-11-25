
document.getElementById('eql').addEventListener("click", function () {
  var firstVal = document.getElementById('firstVal').value;
  var getFirstVal = Number(firstVal);
  var getOperationVal = document.getElementById('calculation').value;
  var lastVal = document.getElementById('lastVal').value;
  var getLastVal = Number(lastVal);
  console.log(typeof getFirstVal, getOperationVal, typeof getLastVal);

  if (getOperationVal === "/") {
    let finalVal = getFirstVal / getLastVal;
    document.getElementById('results').innerHTML = finalVal;
  }

  if (getOperationVal === "*") {
    let finalVal = getFirstVal * getLastVal;
    document.getElementById('results').innerHTML = finalVal;
  }

  if (getOperationVal === "-") {
    let finalVal = getFirstVal - getLastVal;
    document.getElementById('results').innerHTML = finalVal;
  }

  if (getOperationVal === "+") {
    let finalVal = getFirstVal + getLastVal;
    document.getElementById('results').innerHTML = finalVal;
  }
})
