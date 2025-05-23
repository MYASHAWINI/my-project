const fs = require("fs");
const logFile = "logs.txt";

// Function to log operations
function logOperation(operation, input, result) {
    const timestamp = new Date().toISOString();
    const logEntry = `${timestamp} | ${operation} | Input: ${input} | Result: ${result}\n`;

    fs.appendFile(logFile, logEntry, (err) => {
        if (err) console.error("Error writing to log file:", err);
    });
}

// Function to read log history
function readLogHistory() {
    try {
        const data = fs.readFileSync(logFile, "utf8");
        return data || "No logs available yet.";
    } catch (err) {
        return "Error reading log file.";
    }
}

module.exports = { logOperation, readLogHistory };
