function validateNumber(num) {
    return !isNaN(num) && typeof num === "number";
}

function add(a, b) {
    if (!validateNumber(a) || !validateNumber(b)) return "Error: Invalid number input";
    return a + b;
}

function subtract(a, b) {
    if (isNaN(a) || isNaN(b)) return "Error: Invalid number input";
    return a - b;
}

function multiply(a, b) {
    if (isNaN(a) || isNaN(b)) return "Error: Invalid number input";
    return a * b;
}

function divide(a, b) {
    if (!validateNumber(a) || !validateNumber(b)) return "Error: Invalid number input";
    if (b === 0) return "Error: Division by zero";
    return a / b;
}

module.exports = { add, subtract, multiply, divide };

