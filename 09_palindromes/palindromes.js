const palindromes = function (word) {
    const wordLower = word.toLowerCase();
    const wordCleaned = wordLower.replace(/[^a-z]/g, '');
    const wordArray = wordCleaned.split('');
    const inverted = wordArray.reverse().join('');

    return wordCleaned === inverted;
};

// Do not edit below this line
module.exports = palindromes;
