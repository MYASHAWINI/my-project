let memory = [];

function storeToMemory(value) {
    memory.push(value);
}

function getFromMemory(index) {
    return memory[index] || "Error: Invalid memory index";
}

module.exports = { storeToMemory, getFromMemory };
