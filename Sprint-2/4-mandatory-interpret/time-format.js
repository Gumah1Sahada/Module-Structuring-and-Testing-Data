function pad(num) {
  return num.toString().padStart(2, "0");
}

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60;
  const totalMinutes = (seconds - remainingSeconds) / 60;
  const remainingMinutes = totalMinutes % 60;
  const totalHours = (totalMinutes - remainingMinutes) / 60;

  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`;
}

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> write your answer here  pad is called 3 times—once for hours, once for minutes, and once for seconds.


// Call formatTimeDisplay with an input of 61, now answer the following: funnction formatTimeDisplay(seconds) {

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here pad(totalhours) is called for the first time, and the value assigned to num is 1 because 61 seconds is equal to 1 minute and 1 second, which means there are 0 hours.

// c) What is the return value of pad is called for the first time?
// =============> write your answer here pad starts with 0

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here the last time pad is called, it is called with the value of remainingSeconds, which is 1. This is because 61 seconds is equal to 1 minute and 1 second, so the remaining seconds after calculating the total minutes is 1.

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here the return value assigned to num when pad is called for the last time is "01". This is because the value of remainingSeconds is 1, and when passed to the pad function, it converts it to a string and pads.
