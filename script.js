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

// get all the elements
const display1 = document.querySelector(".display-1");
const display2 = document.querySelector(".display-2");
const tempResult = document.querySelector(".temp-result");
const numbers = document.querySelectorAll(".btn-number");
const operation = document.querySelectorAll(".btn-operator");
const equal = document.querySelector(".btn-equal");
const clearAll = document.querySelector(".btn-clear");
const clearLast = document.querySelector(".btn-backspace");

let dis1Num = "";
let dis2Num = "";
let result = null;
let lastOperation = "";
let haveDot = false;

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (e.target.innerText === "." && !haveDot) {
      // if there is no dot -> can be added
      haveDot = true;
    } else if (e.target.innerText === "." && haveDot) {
      // if there is a dot -> not add
      return;
    }
    // if there is already a zero at start
    if (e.target.innerText === "0" && dis2Num === "0") return;

    // display any number that was clicked
    dis2Num += e.target.innerText;
    display2.innerText = dis2Num;
    // console.log();
  });
});

operation.forEach((operation) => {
  operation.addEventListener("click", (e) => {
    if (!dis2Num) return;
    haveDot = false; // if want to add another dot in the next number
    const operationName = e.target.innerText; // operation btn
    // if all the elements necessary exists
    if (dis1Num && dis2Num && lastOperation) {
      mathOperation();
    } else {
      result = parseFloat(dis2Num); // transform string to number
    }
    clearVar(operationName);
    lastOperation = operationName;
    //console.log(result);
  });
});

// function to clear everything
function clearVar(name = "") {
  dis1Num += dis2Num + " " + name + " "; // moving the value to display1
  display1.innerText = dis1Num;
  display2.innerText = "";
  dis2Num = "";
  tempResult.innerText = result;
}

function mathOperation() {
  if (lastOperation === "*") {
    if (parseFloat(result) === "0" || parseFloat(dis2Num) === "0") {
      result = "0";
    } else {
      result = parseFloat(result) * parseFloat(dis2Num);
      result = result.toFixed(3);
    }
  } else if (lastOperation === "+") {
    result = parseFloat(result) + parseFloat(dis2Num);
    result = result.toFixed(3);
  } else if (lastOperation === "-") {
    result = parseFloat(result) - parseFloat(dis2Num);
    result = result.toFixed(3);
  } else if (lastOperation === "/") {
    if (parseFloat(dis2Num) == "0") {
      result = "infinity";
    } else {
      result = parseFloat(result) / parseFloat(dis2Num);
      result = result.toFixed(3);
    }
  } else if (lastOperation === "%") {
    result = parseFloat(result) % parseFloat(dis2Num);
    result = result.toFixed(3);
  }
}

equal.addEventListener("click", () => {
  if (!dis2Num || !dis1Num) return;
  haveDot = false;
  mathOperation();
  clearVar();
  display2.innerText = result;
  tempResult.innerText = "";
  dis2Num = result;
  dis1Num = "";
});

clearAll.addEventListener("click", () => {
  dis1Num = "";
  dis2Num = "";
  display1.innerText = "";
  display2.innerText = "";
  result = "";
  tempResult.innerText = "";
});

clearLast.addEventListener("click", () => {
  display2.innerText = display2.innerText.slice(0, -1);
  dis2Num = display2.innerText;
});

// added keyboard implementation
window.addEventListener("keydown", (e) => {
  if (
    e.key === "0" ||
    e.key === "1" ||
    e.key === "2" ||
    e.key === "3" ||
    e.key === "4" ||
    e.key === "5" ||
    e.key === "6" ||
    e.key === "7" ||
    e.key === "8" ||
    e.key === "9" ||
    e.key === "."
  ) {
    clickButton(e.key);
    // console.log(e.key)
  } else if (
    e.key === "+" ||
    e.key === "-" ||
    e.key === "/" ||
    e.key === "%" ||
    e.key === "*"
  ) {
    clickOperation(e.key);
  } else if (e.key == "Enter" || e.key === "=") {
    clickEqual();
  }
  // console.log(e.key)
});
function clickButton(key) {
  numbers.forEach((button) => {
    if (button.innerText === key) {
      button.click();
    }
  });
}
function clickOperation(key) {
  operation.forEach((operation) => {
    if (operation.innerText === key) {
      operation.click();
    }
  });
}
function clickEqual() {
  equal.click();
}
