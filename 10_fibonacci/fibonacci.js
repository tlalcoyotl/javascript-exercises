const fibonacci = function(n) {
    let number = parseInt(n);
    let fibonacciArray = [0, 1];
    if (number > 1) {
        for (i = 2; i <= number; i++) {
            fibonacciArray.push(fibonacciArray[i-2]+fibonacciArray[i-1]);
        }
    } else if (number === 0 || number === 1) {
        return fibonacciArray[number];
    } else if (number < 0) {
        return 'OOPS';
    }
    return fibonacciArray.pop();
};

// Do not edit below this line
module.exports = fibonacci;
