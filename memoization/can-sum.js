/*
Write a function 'canSum(targetSum, numbers)' that takes in
targetSum and an array of number as arguments.

The function should return a boolean indicating wheater or not it
is possible to generate the targetSum using numbers from the array.

You may use an element of the array as many time as needed.

You may assume that all the input nuber are nonnegative.
*/

const canSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let num of numbers) {
    const reminder = targetSum - num;
    if (canSum(reminder, numbers, memo) === true) {
      memo[targetSum] = true;
      return true;
    }
  }

  memo[targetSum] = false;
  return false;
};

console.log(canSum(2, [2, 3])); // true
console.log(canSum(7, [5, 3, 4, 7])); // true
console.log(canSum(7, [2, 4])); // false
console.log(canSum(8, [2, 3, 5])); // true
console.log(canSum(300, [7, 14])); // false
