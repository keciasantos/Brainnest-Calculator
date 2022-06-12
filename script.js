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
      haveDot = true;
    } else if (e.target.innerText === "." && haveDot) {
      return;
    }
    dis2Num += e.target.innerText;
    display2.innerText = dis2Num;
    // console.log();
  });
});

operation.forEach((operation) => {
  operation.addEventListener("click", (e) => {
    if (!dis2Num) return;
    haveDot = false;
    const operationName = e.target.innerText;
    if (dis1Num && dis2Num && lastOperation) {
      mathOperation();
    } else {
      result = parseFloat(dis2Num);
    }
    clearVar(operationName);
    lastOperation = operationName;
    //console.log(result);
  });
});
function clearVar(name = "") {
  dis1Num += dis2Num + " " + name + " ";
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
    }
  } else if (lastOperation === "+") {
    result = parseFloat(result) + parseFloat(dis2Num);
  } else if (lastOperation === "-") {
    result = parseFloat(result) - parseFloat(dis2Num);
  } else if (lastOperation === "/") {
    if (parseFloat(dis2Num) == "0") {
      alert("Cannot divide by zero");
      result = "0";
    } else {
      result = parseFloat(result) / parseFloat(dis2Num);
    }
  } else if (lastOperation === "%") {
    result = parseFloat(result) % parseFloat(dis2Num);
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
