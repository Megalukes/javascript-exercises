const removeFromArray = function() {
    newArray = arguments[0]
    for(let i = 1; i < arguments.length; i++){
        let indexToRemove = newArray.indexOf(arguments[i])
        if (indexToRemove > -1) {
            newArray.splice(indexToRemove, 1)
        }
    }
    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
