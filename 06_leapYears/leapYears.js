const leapYears = function (year) {
    if (Number.isInteger(year / 400)) {
        return true;
    } else if(Number.isInteger(year / 100)) {
        return false;
    } else if(Number.isInteger(year / 4)) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
