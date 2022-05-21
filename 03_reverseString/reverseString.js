const reverseString = function(string) {
    const stringArray = string.split("");
    const reversedArray = [];

    for (let l = stringArray.length; l >= 0; l--) {
        reversedArray[stringArray.length - l] = stringArray[l];
    }

    return reversedArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
