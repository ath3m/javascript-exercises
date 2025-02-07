const add = function(num1, num2) {
  return num1 + num2
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(arr) {
	let sum = 0
  arr.forEach((item) => {
    sum += item
  })
  return sum
};

const multiply = function(...numbers) {
  let res = 1
   numbers.forEach((item) => {
    res *= item
   })
   return res
};

const power = function(num1, num2) {
	return num1 ** num2
};

const factorial = function(num) {
  if (num == 0)
    return 1
  if (num == 1)
    return 1
  return num * factorial(num - 1)  
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
