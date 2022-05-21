const removeFromArray = function (myArray, ...toRemove) {
    return myArray.filter((x) => !toRemove.includes(x));
};

// Do not edit below this line
module.exports = removeFromArray;
