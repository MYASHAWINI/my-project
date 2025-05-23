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
