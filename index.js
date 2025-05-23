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
