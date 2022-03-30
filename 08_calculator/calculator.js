const add = function(num1, num2) {
	let result = num1 + num2;
  return result;
};

const subtract = function(num1, num2) {
	let result = num1 - num2;
  return result;
};

const sum = function(list) {
	let total = 0;
  for (let i = 0; i < list.length; i++) {
    total += list[i];
  }
  return total;
};

const multiply = function(list) {
  let total = list[0];
  for (let i = 1; i < list.length; i++) {
    total *= list[i];
  }
  return total;
};

const power = function(base, power) {
	let total = Math.pow(base, power);
  return total;
};

const factorial = function(factorial) {
	let total = 1;
  for(let i = factorial; i > 1; i --){
    total *= i;
  }
  return total;
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
