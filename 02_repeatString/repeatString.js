const repeatString = function(wordToRepeat, numberOfTimes) {
  returnSentence = "";
  if (numberOfTimes < 0) {
    return 'ERROR'
  }
  for (let i=0; i < numberOfTimes; i++) {
    returnSentence += wordToRepeat;
  }
  return returnSentence
};

// Do not edit below this line
module.exports = repeatString;
