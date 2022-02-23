let message = 'Hello Node!';
message = 'Hello ES6!';

let sum = 5 + 3;
sum += 1;

console.log(message);
console.log(sum);

// capture command-line arguments 

var commandLineArgs = process.argv;
// the first value is a file path to where Node.js is installed
// the second value is a path to where app.js is found 
console.log(commandLineArgs);

//Arrow functions are not direct replacements to the functions we all know and love but rather a way of creating more concise function expressions where possible. They don't need the function keyword and instead use syntax like the following
// Notice the lack of parentheses around the `profileDataArr` parameter?
const printProfileData = profileDataArr => {
  // This...
  for (let i = 0; i < profileDataArr.length; i += 1) {
    console.log(profileDataArr[i]);
  }

  console.log('================');

  // Is the same as this...
  profileDataArr.forEach(profileItem => console.log(profileItem));
    console.log(profileItem)
};