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

// Function to clear logs
function clearLogs() {
    try {
        fs.writeFileSync(logFile, "", "utf8"); // Overwrites file with an empty string
        console.log("✅ Logs cleared successfully!");
    } catch (err) {
        console.error("Error clearing log file:", err);
    }
}

module.exports = { logOperation, readLogHistory, clearLogs };

