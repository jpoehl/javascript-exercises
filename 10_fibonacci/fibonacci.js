const fibonacci = function (index) {
    const sequence = [1, 1];
    const nth = +(index);

    if (nth < 0) {
        return "OOPS";
    } else {

        for (let i = 2; i < nth; i++) {
            sequence.push(sequence[i - 1] + sequence[i - 2]);
        }

        return sequence[nth - 1];
    }
};

// Do not edit below this line
module.exports = fibonacci;
