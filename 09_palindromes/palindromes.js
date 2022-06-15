const palindromes = function (a) {
  reversed_string = ""

  a = a.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
  a = a.replace(/\s{1,}/g, "")

  a = a.toLowerCase()

  for(var i= a.length - 1; i >= 0; i--) {
    reversed_string += a[i]
  }

  return reversed_string == a

};

// Do not edit below this line
module.exports = palindromes;
