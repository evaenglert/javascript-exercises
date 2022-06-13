const removeFromArray = function(arrayNumber) {
  numbersToRemove = Array.prototype.slice.call(arguments)
  numbersToRemove.splice(0,1)
  for (numberToRemove of numbersToRemove) {
    for (let i = 0; i < arrayNumber.length; i++) {
      if (arrayNumber[i] === numberToRemove) {
        arrayNumber.splice(i,1);
      }

    }
  }
  console.log(arrayNumber)
  return arrayNumber


};

// Do not edit below this line
module.exports = removeFromArray;
