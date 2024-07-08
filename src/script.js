let currentValue = "";

const display = document.getElementById("calc-input")
const buttons = document.getElementsByClassName("btn")

function equaltoResult() {
  console.log('currentValue:', currentValue)
  const convertedValue = currentValue.replace("x", "*")
    .replace("÷", "/")
    .replace("%", "*0.01")
    .replace("sin", "Math.sin")
    .replace("cos", "Math.cos")
    .replace("ln", "Math.log")
    .replace("π", "Math.PI")
    .replace("log", "Math.log10")
    .replace("e", "Math.E")
    .replace("tan", "Math.tan")
    .replace("√", "Math.sqrt")
  const result = eval(convertedValue);
  console.log('convertedValue:', convertedValue)
  currentValue = result.toString();
  display.value = currentValue
}


for (let i = 0; i < buttons.length; i++) {
  const button = buttons[i]; //getting each buttons as button i
  button.addEventListener("click", function () {   //adding click event to each buttons 
    const value = button.innerText;

    try {


      if (value == "AC") {
        currentValue = "";
        display.value = currentValue
      } else if (value == "=") {
        equaltoResult()
      }
      else {
        currentValue += value;
        display.value = currentValue;
      }

    } catch (error) {
        currentValue = "Error Value...!!!"
        console.error(error)
        display.value = currentValue
    }


  })
}