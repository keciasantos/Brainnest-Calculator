// Activate dark mode
const themeToggleBtn = document.querySelector(".theme-toggler");
const calculatorContainer = document.querySelector(".calculator");
const buttons = calculatorContainer.querySelector(".buttons");
const container = document.querySelector(".container");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;
themeToggleBtn.onclick = () => {
  container.classList.toggle("dark");
  calculatorContainer.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
};

let result = document.getElementById("display");

const calculate = (number) => {
  result.value = result.value + number;
};

const Result = () => {
  try {
    result.value = eval(result.value);
  } catch (error) {
    alert("enter an valid input");
  }
};

function clr() {
  return (result.value = "");
}

function del() {
  return (result.value = result.value.slice(0, -1));
}

// const calculator = {
//   displayValue: "0",
//   firstOperand: null,
//   waitingForSecondOperand: false,
//   operator: null,
// };

// function inputDigit(digit) {
//   const { displayValue, waitingForSecondOperand } = calculator;

//   if (waitingForSecondOperand === true) {
//     calculator.displayValue = digit;
//     calculator.waitingForSecondOperand = false;
//   } else {
//     calculator.displayValue =
//       displayValue === "0" ? digit : displayValue + digit;
//   }
// }

// function inputDecimal(dot) {
//   if (calculator.waitingForSecondOperand === true) {
//     calculator.displayValue = "0.";
//     calculator.waitingForSecondOperand = false;
//     return;
//   }

//   if (!calculator.displayValue.includes(dot)) {
//     calculator.displayValue += dot;
//   }
// }

// function handleOperator(nextOperator) {
//   const { firstOperand, displayValue, operator } = calculator;
//   const inputValue = parseFloat(displayValue);

//   if (operator && calculator.waitingForSecondOperand) {
//     calculator.operator = nextOperator;
//     return;
//   }

//   if (firstOperand == null && !isNaN(inputValue)) {
//     calculator.firstOperand = inputValue;
//   } else if (operator) {
//     const result = calculate(firstOperand, inputValue, operator);

//     calculator.displayValue = `${parseFloat(result.toFixed(7))}`;
//     calculator.firstOperand = result;
//   }

//   calculator.waitingForSecondOperand = true;
//   calculator.operator = nextOperator;
// }

//buttons.addEventListener("click", (e) => {
// e.target.innerText: give back the label of the button that was clicked
//   switch (e.target.innerText) {
//     // when hits 'C': clear the display -> access display reference and set the innerText and add a break
//     case "C":
//       display.innerText = "";
//       break;
//     // when hits '=': use eval function -> it will evaluate and return the result
//     case "=":
//       try {
//         display.innerText = eval(display.innerText);
//       } catch {
//         display.innerText = "Error";
//       }
//       break;
//     // when hits '<': string.slice() -> only if the display has any value
//     case "<":
//       if (display.innerText) {
//         display.innerText = display.innerText.slice(0, -1);
//       }
//       break;
//     default:
//       display.innerText += e.target.innerText;
//       console.log(buttons);
//   }
//});
