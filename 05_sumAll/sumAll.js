const sumAll = function(startNumber, endNumber) {
  finalSum = 0;

  if (typeof startNumber != "number" || typeof endNumber != "number") {
    return "ERROR";
  }

  if (startNumber < 0 || endNumber < 0) {
    return "ERROR";
  }

  if (startNumber > endNumber) {
    let mid = startNumber;
    startNumber = endNumber;
    endNumber = mid;
  }

  for (let i= startNumber; i<=endNumber; i++) {
    finalSum += i;
  }

  return finalSum

};

// Do not edit below this line
module.exports = sumAll;
