const ftoc = function(temp_fahrenheit) {
  const temp_celsius = (temp_fahrenheit - 32) * 5 / 9;
  return Math.round((temp_celsius + Number.EPSILON) * 10) / 10;
};

const ctof = function(temp_celsius) {
  const temp_fahrenheit =  temp_celsius * 9 / 5 + 32;
  return Math.round((temp_fahrenheit + Number.EPSILON) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
