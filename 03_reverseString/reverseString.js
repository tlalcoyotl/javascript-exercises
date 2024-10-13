const reverseString = function(string) {
let chars = string.split('');
let reverse = ''
for (i = 0; i < string.length; i++) {
    reverse = reverse.concat(chars.pop());
}
return reverse;
};

// Do not edit below this line
module.exports = reverseString;
