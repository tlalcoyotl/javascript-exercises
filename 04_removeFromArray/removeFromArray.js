const removeFromArray = function(mainArray, ...values) {
    
    for (let i = 0; i < values.length; i++) {
        if (mainArray.includes(values[i]) == false) {
            continue;
        } else {
            mainArray.splice(mainArray.indexOf(values[i]), 1);
            console.log(mainArray);
        } 
        if (mainArray.includes(values[i])) {
            i--;
        }
    }
    return mainArray;
};

// Do not edit below this line
module.exports = removeFromArray;
