function validateSequence(seq) {
    return Array.isArray(seq) && seq.every(num => !isNaN(num));
}

function sortSequence(seq) {
    if (!validateSequence(seq)) return "Error: Invalid sequence input";
    return seq.sort((a, b) => a - b);
}

function findMode(seq) {
    if (!validateSequence(seq)) return "Error: Invalid sequence input";
    const freqMap = {};
    seq.forEach(num => freqMap[num] = (freqMap[num] || 0) + 1);
    const maxFreq = Math.max(...Object.values(freqMap));
    return Object.keys(freqMap).filter(key => freqMap[key] === maxFreq).map(Number);
}

function findGreatest(seq) { return Math.max(...seq); }
function findMean(seq) { return seq.reduce((sum, num) => sum + num, 0) / seq.length; }
function findMedian(seq) {
    seq.sort((a, b) => a - b);
    const mid = Math.floor(seq.length / 2);
    return seq.length % 2 === 0 ? (seq[mid - 1] + seq[mid]) / 2 : seq[mid];
}

module.exports = { sortSequence, findGreatest, findMean, findMedian, findMode };
