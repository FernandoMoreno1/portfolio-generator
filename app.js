const fs = require('fs');

// what this is doing is calling the generatePage function in page-template and running it here
const generatePage = require('./src/page-template.js');


const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;

fs.writeFile('./index.html', generatePage(name, github), err => {
  if (err) throw new Error(err);

  console.log('Portfolio complete! Check out index.html to see the output!');
});