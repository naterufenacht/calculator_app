const button = document.getElementById("btn");
const inputField = document.getElementById("userInput");
const resultDisplay = document.getElementById("result");
const resetButton = document.getElementById("resetBtn");

button.addEventListener("click", () => {
    let rawInput = inputField.value.trim();

    if (rawInput.includes("=")) {
        rawInput = rawInput.split("=").pop();
    }

    let cleanInput = rawInput.replace(/\s+/g, "");

    let match = cleanInput.match(/^(-?\d+\.?\d*)([+\-*/])(-?\d+\.?\d*)$/);

    resultDisplay.className = "result";

    if (!match) {
        resultDisplay.textContent = "Error: Use format like -5+3";
        resultDisplay.classList.add("error");
        return;
    }

    let num1 = parseFloat(match[1]);
    let operator = match[2];
    let num2 = parseFloat(match[3]);

    if (isNaN(num1) || isNaN(num2)) {
        resultDisplay.textContent = "Error: Numbers only";
        resultDisplay.classList.add("error");
        return;
    }

    let finalResult;

    switch (operator) {
        case "+": finalResult = add(num1, num2); break;
        case "-": finalResult = subtract(num1, num2); break;
        case "*": finalResult = multiply(num1, num2); break;
        case "/":
            if (num2 === 0) {
                resultDisplay.textContent = "Error: Division by zero";
                resultDisplay.classList.add("error");
                return;
            }
            finalResult = divide(num1, num2);
            break;
    }

    resultDisplay.textContent = `Result: ${finalResult}`;
    resultDisplay.classList.add("success");

    inputField.value = "";
    inputField.focus();
});

function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) { return a / b; }

resetButton.addEventListener("click", () => {
    inputField.value = "";
    resultDisplay.textContent = "Result:";
    resultDisplay.className = "result";
    inputField.focus();
});

inputField.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        button.click();
    }
});


    //break