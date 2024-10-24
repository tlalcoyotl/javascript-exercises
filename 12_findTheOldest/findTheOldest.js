const findTheOldest = function(arr) {
    let currentYear = new Date().getFullYear();

    arr.map(item => {
        if (typeof item.yearOfDeath == 'undefined') {
            item.ageOfDeath = currentYear - item.yearOfBirth;
        } else {
            item.ageOfDeath = item.yearOfDeath - item.yearOfBirth;
        }
    });
    
    arr.sort((a,b) => a.ageOfDeath - b.ageOfDeath);

    return arr.pop();
};

// Do not edit below this line
module.exports = findTheOldest;
