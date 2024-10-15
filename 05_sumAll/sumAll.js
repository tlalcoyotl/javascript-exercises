const sumAll = function(start, finish) {
    function integerNum(num) {
        num.isInteger();
    }
    let finalSum = 0;
    console.log(Number.isInteger(start));
    if (start >= 0 && finish >= 0 
        && Number.isInteger(start)
        && Number.isInteger(finish)) {
        if (start > finish) {
            for (let i = 0; i < (start - finish) + 1; i++) {
                finalSum += (+finish + +[i]);
                finalSum;
                console.log(finalSum);
            }
        } else {
            for (let i = 0; i < (finish - start) + 1; i++) {
                finalSum += (+start + +[i]);
                finalSum;
                console.log(finalSum);
            };
        }
        } else {
             finalSum = 'ERROR';
        }
        return finalSum;
    }

// Do not edit below this line
module.exports = sumAll;
