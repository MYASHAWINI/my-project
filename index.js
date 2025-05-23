console.log("\nSimple Calculator - JavaScript CLI");
console.log("\n📌 Welcome to the Simple Command-Line Calculator!");
console.log("👉 Please follow the prompts carefully.");

const prompt = require("prompt-sync")();
const { add, subtract, multiply, divide } = require("./modules/arithmetic");
const { sortSequence, findGreatest, findMean, findMedian, findMode } = require("./modules/sequences");
const { storeToMemory, getFromMemory } = require("./modules/memory");
const { logOperation, readLogHistory, clearLogs } = require("./modules/logger");

while (true) {
    console.log("\n🔹 Choose an operation:");
    console.log("1️⃣ Addition");
    console.log("2️⃣ Subtraction");
    console.log("3️⃣ Multiplication");
    console.log("4️⃣ Division");
    console.log("5️⃣ Sort a Sequence");
    console.log("6️⃣ Find Greatest Number");
    console.log("7️⃣ Find Mean");
    console.log("8️⃣ Find Median");
    console.log("9️⃣ Find Mode");
    console.log("🔟 Store a Result to Memory");
    console.log("1️⃣1️⃣ Retrieve from Memory");
    console.log("1️⃣2️⃣ View Log History");
    console.log("1️⃣3️⃣ Clear Logs");
    console.log("1️⃣4️⃣ Exit");
    
    let choice = parseInt(prompt("\n💡 Enter your choice (1-14): "));

    // Ensure user selects valid option
    if (choice < 1 || choice > 14 || isNaN(choice)) {
        console.log("⚠️ Error: Please enter a valid number between **1 and 14**.");
        continue;
    }
    
    // Handle arithmetic operations
    if ([1, 2, 3, 4].includes(choice)) {
        let a = parseFloat(prompt("✏️ Enter first number: "));
        let b = parseFloat(prompt("✏️ Enter second number: "));
        let result = choice === 1 ? add(...input.split(",").map(Number)) :
                    choice === 2 ? subtract(a, b) :
                    choice === 3 ? multiply(a, b) :
                    choice === 2 ? divide(...input.split(",").map(Number)) :
   
        console.log("✅ Result:", result);
        logOperation(`Choice ${choice}`, `${a}, ${b}`, result);
    }

    // Handle sequence-related operations
    else if ([5, 6, 7, 8, 9].includes(choice)) {
        let sequence = prompt("Enter sequence of numbers (comma separated): (e.g., 5,10,15): ").split(",").map(Number);
        let result = choice === 5 ? sortSequence(input.split(",").map(Number)) :
                    choice === 6 ? findGreatest(sequence) :
                    choice === 7 ? findMean(sequence) :
                    choice === 8 ? findMedian(sequence) :
                    choice === 9 ? findMode(input.split(",").map(Number));
        
        if (sequence.some(isNaN)) {
            console.log("⚠️ Error: Please enter **valid numbers** separated by commas.");
            continue;
        }

        console.log("✅ Result:", result);
        logOperation(`Choice ${choice}`, sequence.join(","), result);
        continue;
    }

    // Handle Memory Storage and Retrieval
    else if (choice === 10) {
        let value = parseFloat(prompt("✏️ Enter the value to store in memory: "));
        if (isNaN(value)) {
            continue;
        }
        storeToMemory(value);
        console.log("✅ Value stored successfully!");
        continue;
    } 
    else if (choice === 11) {
        let index = parseInt(prompt("✏️ Enter memory index to retrieve value: "));
        console.log("📂 Retrieved Value:", getFromMemory(index));
        continue;
    }

    // Handle Log Viewing and Clearing
    else if (choice === 12) {
        console.log("\n📜 Calculation History:\n");
        console.log(readLogHistory());
        continue;
    } 
    else if (choice === 13) {
        clearLogs();
        continue;
    }
     // Handle Exit option
    if (choice === 14) {    
        console.log("\n🚀 Exiting... Thank you for using the calculator!");
        break;
    }
}
