const { add, subtract, multiply, divide, findMean } = require('./calculator');

test('Addition works correctly', () => {
    expect(add(5, 3)).toBe(8);
});

test('Subtraction works correctly', () => {
    expect(subtract(10, 3)).toBe(7);
});

test('Multiplication works correctly', () => {
    expect(multiply(4, 3)).toBe(12);
});

test('Division works correctly', () => {
    expect(divide(10, 2)).toBe(5);
    expect(divide(10, 0)).toBe('Error: Division by zero');
});

test('Mean calculation works', () => {
    expect(findMean([1, 2, 3, 4, 5])).toBe(3);
});
function add(a, b) {
    if (isNaN(a) || isNaN(b)) return "Error: Invalid number input";
    return a + b;
}

function divide(a, b) {
    if (isNaN(a) || isNaN(b)) return "Error: Invalid number input";
    if (b === 0) return "Error: Division by zero";
    return a / b;
}
