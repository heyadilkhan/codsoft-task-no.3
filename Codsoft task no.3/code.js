document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll("button");
  
    let currentInput = "";
    let operator = "";
    let firstOperand = null;
  
    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        const value = button.textContent;
  
        if (!isNaN(value) || value === ".") {
         
          currentInput += value;
        } else if (value === "C") {
          // Clear the calculator
          currentInput = "";
          firstOperand = null;
          operator = "";
        } else if (value === "=") {
         
          if (firstOperand !== null) {
            const secondOperand = parseFloat(currentInput);
            switch (operator) {
              case "+":
                currentInput = firstOperand + secondOperand;
                break;
              case "-":
                currentInput = firstOperand - secondOperand;
                break;
              case "*":
                currentInput = firstOperand * secondOperand;
                break;
              case "/":
                currentInput = firstOperand / secondOperand;
                break;
            }
            operator = "";
            firstOperand = currentInput;
          }
        } else {
          // If the button is an operator
          if (firstOperand === null) {
            firstOperand = parseFloat(currentInput);
            operator = value;
            currentInput = "";
          } else {
            // Chain operations if there's already an operator
            const secondOperand = parseFloat(currentInput);
            switch (operator) {
              case "+":
                firstOperand += secondOperand;
                break;
              case "-":
                firstOperand -= secondOperand;
                break;
              case "*":
                firstOperand *= secondOperand;
                break;
              case "/":
                firstOperand /= secondOperand;
                break;
            }
            operator = value;
            currentInput = "";
          }
        }
        display.value = currentInput;
      });
    });
  });
  