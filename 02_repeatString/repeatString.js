const repeatString = function(str = "hey", num = 3) {
    if (num < 0) return 'ERROR'
    var finalString = ""
    for(let n = 0; n < num; n++){
        finalString += str
    }
    return finalString
    
};

// Do not edit below this line
module.exports = repeatString;
