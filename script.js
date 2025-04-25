let firstValue = "";
let operator = "";
let shouldClear = false;


function btnClick(val) {
    const screen = document.getElementById("screen");

    if (val === "+" || val === "-" || val === "*" || val === "/") {
        firstValue = screen.value;
        operator = val;
        shouldClear = true;
        return;
    }
    if (shouldClear) {
        screen.value = "";
        shouldClear = false;
    }
    screen.value += val;
}
function clearScreen() {
    document.getElementById("screen").value = ""
}
function deleteChar() {
    const screen = document.getElementById("screen");
    screen.value = screen.value.slice(0, -1);
}
function percentageCalc() {
    const screen = document.getElementById("screen");

    if(firstValue && operator) {
        let currentValue = parseFloat(screen.value);
        let base = parseFloat(firstValue);
        let percentageValue = 0;
        if(operator === "+" || operator === "-") {
            percentageValue = (base * currentValue)  / 100;
        } else if (operator === "*" || operator==="/") {
            percentageValue = currentValue /100;
        }
    }
    screen.value = percentageValue;
}
function calculate() {
    const screen = document.getElementById("screen")
    let secondValue = screen.value;

    let num1 = parseFloat(firstValue);
    let num2 = parseFloat(secondValue);
    let result = 0;
    switch (operator) {
        case "+": result = num1 + num2; break;
        case "-": result = num1 - num2; break;
        case "*": result = num1 * num2; break;
        case "/":
            if (num2 === 0) {
                screen.value = "Error";
                return;
            }
            result = num1 / num2; break;
        default:
            return;
    }
    screen.value = result;
    firstValue = result.toString();
    operator = "";

}