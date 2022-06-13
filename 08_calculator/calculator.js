const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
  return a - b;
};

const sum = function(list_of_num) {
  var final_value = 0

  for (const number of list_of_num) {
    final_value += number
  }

  return final_value

};

const multiply = function(numbers_to_multiply) {
  var final_value = 1

  for (const number of numbers_to_multiply) {
    final_value *= number
  }

  return final_value
};

const power = function(a,b) {
  var final_value = 1

  for (var i = 0; i < b; i++) {
    final_value = final_value * a
  }

  return final_value
};

const factorial = function(a) {
  var final_value = 1

  while (a > 0) {
    final_value *= a
    a = a - 1
  }

  return final_value
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
