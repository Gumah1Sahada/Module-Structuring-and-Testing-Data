let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// There are 4 function calls in this file. The lines where function calls are made are:
// Line 3: carPrice.replaceAll(",", "")
// Line 4: priceAfterOneYear.replaceAll(",", "")
// Line 6: Number(carPrice.replaceAll(",", ""))
// Line 7: Number(priceAfterOneYear.replaceAll(",", ""))

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
 //The error is occurring on line 4: priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));
// The error is occurring because there is a missing comma in the replaceAll method. It should be priceAfterOneYear.replaceAll(",", "") instead of priceAfterOneYear.replaceAll("," "").
// To fix this problem, we need to add the missing comma in the replaceAll method on line 4.

// c) Identify all the lines that are variable reassignment statements
// The lines that are variable reassignment statements are:
// Line 3: carPrice = Number(carPrice.replaceAll(",", ""));
// Line 4: priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

// d) Identify all the lines that are variable declarations
// The lines that are variable declarations are:
// Line 1: let carPrice = "10,000";
// Line 2: let priceAfterOneYear = "8,543";
// Line 6: const priceDifference = carPrice - priceAfterOneYear;
// Line 7: const percentageChange = (priceDifference / carPrice) * 100;

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// The expression Number(carPrice.replaceAll(",","")) is first using the replaceAll method to remove all commas from the string value of carPrice. This is necessary because the presence of commas in a number string can cause issues when converting it to a number. After removing the commas, the expression then converts the resulting string into a number using the Number() function. The purpose of this expression is to ensure that carPrice is in a proper numeric format for calculations, allowing for accurate arithmetic operations.