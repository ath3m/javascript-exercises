const sumAll = function(arg1, arg2) {
    if (!Number.isInteger(arg1) || !Number.isInteger(arg2)) return "ERROR"
    if (arg1 < 0 || arg2 < 0) return "ERROR"

    let bigger = Math.max(arg1, arg2)
    let smaller = Math.min(arg1, arg2) - 1

    return (bigger * (bigger + 1) / 2) - (smaller * (smaller + 1)/ 2)
};

// Do not edit below this line
module.exports = sumAll;
