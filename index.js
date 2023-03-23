let calculation = "";

function addToDisplay(value) {
  calculation += value;
  document.getElementById("result").value = calculation;
}

function clearDisplay() {
  calculation = "";
  document.getElementById("result").value = "";
}

function calculate() {
  let result = eval(calculation);
  document.getElementById("result").value = result;
  calculation = "";
}
