// Predict and explain first...

// Why will an error occur when this program runs?.
// =============> write your prediction here my prediction is that the code will throw an error because the variable 'decimalNumber' is being declared twice .

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> write your explanation here if we remove the parameter of the function and we make the declaration of decimalNumber inside the function, it will work.

// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage() {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}
console.log(convertToPercentage());

