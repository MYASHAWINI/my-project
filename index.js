const prompt = require("prompt-sync")();
const { add, subtract, multiply, divide } = require("./modules/arithmetic");
const { sortSequence, findGreatest, findMean, findMedian, findMode } = require("./modules/sequences");
const { storeToMemory, getFromMemory } = require("./modules/memory");

console.log("\nSimple Calculator - JavaScript CLI");

while (true) {
    console.log("\nOptions:\n1. Add\n2. Subtract\n3. Multiply\n4. Divide\n5. Sort\n6. Greatest\n7. Mean\n8. Median\n9. Mode\n10. Store to Memory\n11. Retrieve from Memory\n12. Exit");
    let choice = parseInt(prompt("Enter your choice: "));

    if (choice === 12) break;

    if ([1, 2, 3, 4].includes(choice)) {
        let a = parseFloat(prompt("Enter first number: "));
        let b = parseFloat(prompt("Enter second number: "));
        let result = choice === 1 ? add(a, b) :
                    choice === 2 ? subtract(a, b) :
                    choice === 3 ? multiply(a, b) :
                    choice === 4 ? divide(a, b);

        console.log("Result:", result);
        storeToMemory(result);
    } else if ([5, 6, 7, 8, 9].includes(choice)) {
        let sequence = prompt("Enter sequence of numbers (comma separated): ").split(",").map(Number);
        let result = choice === 5 ? sortSequence(sequence) :
                    choice === 6 ? findGreatest(sequence) :
                    choice === 7 ? findMean(sequence) :
                    choice === 8 ? findMedian(sequence) :
                    findMode(sequence);

        console.log("Result:", result);
        storeToMemory(result);
    } else if (choice === 10) {
        let value = parseFloat(prompt("Enter value to store: "));
        storeToMemory(value);
        console.log("Value stored in memory.");
    } else if (choice === 11) {
        let index = parseInt(prompt("Enter memory index: "));
        console.log("Retrieved Value:", getFromMemory(index));
    } else {
        console.log("⚠️ Invalid choice, please try again by entering a **valid option** (1-12).");
    }
}

console.log("Exiting... Thank you!");

const { logOperation, readLogHistory } = require("./modules/logger");
View Log History\n6. Exit");

    if (choice === 13) {
        console.log("\n📜 Calculation History:\n");
        console.log(readLogHistory());
        continue;
    }
    if (choice === 14) break;
    let input = prompt("Enter input values: ");
    let result = choice === 1 ? add(...input.split(",").map(Number)) :
                 choice === 2 ? divide(...input.split(",").map(Number)) :
                 choice === 3 ? sortSequence(input.split(",").map(Number)) :
                 findMode(input.split(",").map(Number));

    console.log("Result:", result);
    logOperation(`Choice ${choice}`, input, result);
}

const { logOperation, readLogHistory, clearLogs } = require("./modules/logger");

    console.log("\nOptions:\n1. Add\n2. Divide\n3. Sort Sequence\n4. Find Mode\n5. View Log History\n6. Clear Logs\n7. Exit");    

    if (choice === 6) {
        clearLogs();
        continue;
    }

console.log("\n📌 Welcome to the Simple Command-Line Calculator!");
console.log("👉 Please follow the prompts carefully.");

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

    // Handle Exit option
    if (choice === 14) {
        console.log("\n🚀 Exiting... Thank you for using the calculator!");
        break;
    }

    // Ensure user selects valid option
    if (choice < 1 || choice > 14 || isNaN(choice)) {
        console.log("⚠️ Error: Please enter a valid number between **1 and 14**.");
        continue;
    }

    // Handle arithmetic operations
    if ([1, 2, 3, 4].includes(choice)) {
        let a = parseFloat(prompt("✏️ Enter first number: "));
        let b = parseFloat(prompt("✏️ Enter second number: "));
        let result = choice === 1 ? add(a, b) :
                    choice === 2 ? subtract(a, b) :
                    choice === 3 ? multiply(a, b) :
                    divide(a, b);

        console.log("✅ Result:", result);
        logOperation(`Choice ${choice}`, `${a}, ${b}`, result);
    }

    // Handle sequence-related operations
    else if ([5, 6, 7, 8, 9].includes(choice)) {
        let sequence = prompt("✏️ Enter a sequence of numbers **comma-separated** (e.g., 5,10,15): ")
                        .split(",")
                        .map(Number);

        if (sequence.some(isNaN)) {
            console.log("⚠️ Error: Please enter **valid numbers** separated by commas.");
            continue;
        }

        let result = choice === 5 ? sortSequence(sequence) :
                    choice === 6 ? findGreatest(sequence) :
                    choice === 7 ? findMean(sequence) :
                    choice === 8 ? findMedian(sequence) :
                    findMode(sequence);

        console.log("✅ Result:", result);
        logOperation(`Choice ${choice}`, sequence.join(","), result);
    }

    // Handle Memory Storage and Retrieval
    else if (choice === 10) {
        let value = parseFloat(prompt("✏️ Enter the value to store in memory: "));
        if (isNaN(value)) {
            console.log("⚠️ Error: Invalid input. Please enter a **valid number**.");
            continue;
        }
        storeToMemory(value);
        console.log("✅ Value stored successfully!");
    } 
    else if (choice === 11) {
        let index = parseInt(prompt("✏️ Enter memory index to retrieve value: "));
        console.log("📂 Retrieved Value:", getFromMemory(index));
    }

    // Handle Log Viewing and Clearing
    else if (choice === 12) {
        console.log("\n📜 Calculation History:\n");
        console.log(readLogHistory());
    } 
    else if (choice === 13) {
        clearLogs();
    }
}
