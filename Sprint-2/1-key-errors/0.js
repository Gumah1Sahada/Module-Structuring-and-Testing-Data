// Predict and explain first...
//  =============> write your prediction here my prediction is that the code will throw an error because the variable 'str' is being declared twice .

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here
// =============> write your new code here
function capitalise(str) {
    str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
