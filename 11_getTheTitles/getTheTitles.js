const getTheTitles = function(books) {
  const allTitles = books.reduce(function (previous, current, i) {
    if (i==1) {
      return [previous.title, current.title]
    }
    else {
      return previous.concat([current.title])
    }
  });

  return allTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
