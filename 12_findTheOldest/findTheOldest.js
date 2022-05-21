const findTheOldest = function (persons) {
    const ages = [];
    const year = new Date().getFullYear();

    for (person of persons) {
        if (person.yearOfDeath === undefined) {
            ages.push(year - person.yearOfBirth);
        } else {
            ages.push(person.yearOfDeath - person.yearOfBirth);
        }
    }

    const maxAge = Math.max(...ages);
    const index = ages.indexOf(maxAge);

    return persons[index];
};

// Do not edit below this line
module.exports = findTheOldest;
