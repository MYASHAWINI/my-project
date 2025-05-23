// calculator.js
const prompt = require("prompt-sync")(); // For user input

// Memory storage
let memory = [];

// Basic arithmetic functions
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) { return b !== 0 ? a / b : "Error: Division by zero"; }

// Advanced sequence functions
function sortSequence(seq) { return seq.sort((a, b) => a - b); }
function findGreatest(seq) { return Math.max(...seq); }
function findMean(seq) { return seq.reduce((sum, num) => sum + num, 0) / seq.length; }
function findMedian(seq) { 
    seq.sort((a, b) => a - b);
    const mid = Math.floor(seq.length / 2);
    return seq.length % 2 === 0 ? (seq[mid - 1] + seq[mid]) / 2 : seq[mid]; 
}
function findMode(seq) {
    const freqMap = {};
    seq.forEach(num => freqMap[num] = (freqMap[num] || 0) + 1);
    const maxFreq = Math.max(...Object.values(freqMap));
    return Object.keys(freqMap).filter(key => freqMap[key] === maxFreq).map(Number);
}

// Memory functions
function storeToMemory(value) { memory.push(value); }
function getFromMemory(index) { return memory[index] || "Error: Invalid memory index"; }

function main() {
    console.log("\nSimple Calculator - JavaScript CLI");
    
    while (true) {
        console.log("\nOptions: \n1. Add \n2. Subtract \n3. Multiply \n4. Divide \n5. Sort Sequence \n6. Find Greatest \n7. Find Mean \n8. Find Median \n9. Find Mode \n10. Store to Memory \n11. Retrieve from Memory \n12. Exit");
        let choice = parseInt(prompt("Enter your choice: "));

        if (choice === 12) break;

        if ([1, 2, 3, 4].includes(choice)) {
            let a = parseFloat(prompt("Enter first number: "));
            let b = parseFloat(prompt("Enter second number: "));
            let result = choice === 1 ? add(a, b) :
                        choice === 2 ? subtract(a, b) :
                        choice === 3 ? multiply(a, b) :
                        divide(a, b);

            console.log("Result:", result);
            storeToMemory(result);
        }
        else if ([5, 6, 7, 8, 9].includes(choice)) {
            let sequence = prompt("Enter sequence of numbers (comma separated): ").split(",").map(Number);
            let result = choice === 5 ? sortSequence(sequence) :
                        choice === 6 ? findGreatest(sequence) :
                        choice === 7 ? findMean(sequence) :
                        choice === 8 ? findMedian(sequence) :
                        findMode(sequence);

            console.log("Result:", result);
            storeToMemory(result);
        }
        else if (choice === 10) {
            let value = parseFloat(prompt("Enter value to store: "));
            storeToMemory(value);
            console.log("Value stored in memory.");
        }
        else if (choice === 11) {
            let index = parseInt(prompt("Enter memory index: "));
            console.log("Retrieved Value:", getFromMemory(index));
        }
        else {
            console.log("Invalid choice, please try again.");
        }
    }
    
    console.log("Exiting... Thank you!");
}

// Run the calculator
main();
