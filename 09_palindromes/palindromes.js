const palindromes = function (string) {
    const alphanumeric = 'abcdefghijklmnopqrstuvwxyz0123456789'.split('');
    let splitString = string.toLowerCase().split('');
    let cleanArray = splitString.filter(letter => alphanumeric.includes(letter));
    console.log(cleanArray.join());
    console.log(cleanArray.reverse().join());
    return cleanArray.join() === cleanArray.reverse().join();
};

// Do not edit below this line
module.exports = palindromes;
