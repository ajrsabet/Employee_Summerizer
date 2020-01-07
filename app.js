const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');


const writeFileAsync = util.promisify(fs.writeFile);


////////////////// Main Function ///////////////////////
async function main() {
  try {
    const userInput = await promptUser();
    console.log('user Input: ' + JSON.stringify(userInput));

    
    const html = await generateHTML(userInput);
    writeFileAsync('index.html', html, 'utf8');
    
  } catch (err) {
    console.log(err);
  }

}



////////////////// Prompt User ///////////////////////
async function promptUser() {
  try {
   const responses = await inquirer.prompt([
    {
      name: 'email',
      type: 'input',
      message: 'What is your email?',
    },
    {
      name: 'id',
      type: 'input',
      message: 'What is your ID?',
    },
    {
      name: 'position',
      type: 'list',
      message: 'What is their possition?',
      choices: ['Engineer','Intern','Manager'],
    }
  ])
return responses;
  
} catch (err) {
    console.log(err);
  }
};



////////////////// Write HTML ///////////////////////  
async function generateHTML(userInput, githubData) {
  try {    const html = 
  `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <title>Developer Profile</title>
</head>
<style>
    
</style>
<body>
  <div class="container">
    
  </div>
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
    integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous">
  </script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
    integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous">
  </script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
    integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous">
  </script>
</body>
</html>`
return html;
  } catch (err) {
    console.log(err);
  }
};


main();