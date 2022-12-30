const sumAll = function(a, b) {
    if (a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b)) return "ERROR"
    let startRange = b < a ? b : a
    let endRange = b < a ? a : b
    let newValue = 0

    for(let i = startRange; i <= endRange; i++){
        newValue += i
    }
    return newValue
};

// Do not edit below this line
module.exports = sumAll;
