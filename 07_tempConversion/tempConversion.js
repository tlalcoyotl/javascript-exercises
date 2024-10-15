const convertToCelsius = function(tempF) {
    let tempC = parseFloat((tempF - 32) * (5/9));
    if (Number.isInteger(tempC)) {
    return parseInt(tempC);
    } else {
    return parseFloat(tempC.toFixed(1));
  }
};

const convertToFahrenheit = function(tempC) {
  let tempF = parseFloat((tempC * 9/5) + 32);
  if (Number.isInteger(tempF)) {
    return parseInt(tempF);
  } else {
  return parseFloat(tempF.toFixed(1));
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
