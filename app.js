const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
// const Employee = require("./Employee.js");
const Manager = require("./lib/Manager.js");
const Intern = require("./lib/Intern.js");
const Engineer = require("./lib/Engineer.js");


const writeFileAsync = util.promisify(fs.writeFile);


////////////////// Main Function ///////////////////////
// async function main() {
//   try {
    // const html = await generateHTML(newEmployee);
    // writeFileAsync('index.html', html, 'utf8');


//     const newEmployee = await newEmployee();
//     console.log('user Input: ' + JSON.stringify(newEmployee));

//   } catch (err) {
//     console.log(err);
//   }

// }



const employeeCardsArr = [];
let employeeCardsStr;



function newEmployee(){
  inquirer.prompt([
      {
        type: "list",
        message: "What's your role?",
        name: "role",
        choices: [
          "Manager",
          "Engineer",
          "Intern"
        ]
      },
      {
        type: "input",
        message: "What is your Name?",
        name: "name"
      },
      {
        type: "input",
        message: "What is your Id?",
        name: "id"
      },
      {
        type: "input",
        message: "What is your Email?",
        name: "email"
      }
    ])// add a .then/.catch
    .then(function(mainAnswer){
        if (mainAnswer.role==="Manager"){
            managerData(mainAnswer)
        }
        else if(mainAnswer.role==="Engineer"){
            engineerData(mainAnswer)
        }
        else if ( mainAnswer.role==="Intern"){
            internData(mainAnswer)
        }
    })
    .catch(function(err){
        console.log(err);
    })
}


function managerData(answers){
  inquirer.prompt([
      {
        type: "input",
        message: "What is your Office Number?",
        name: "officeNumber"
      }
    ]).then(function(office){
        console.log(answers, office);
        const manager = new Manager (answers.name, answers.id, answers.email, office.officeNumber)

        employeeCardsArr.push(manager.appendHtml()); 
        console.log(employeeCardsArr);
        nextEmployee();
      })
}


function engineerData(answers){
  inquirer.prompt([
      {
        type: "input",
        message: "What is your github username?",
        name: "gitName"
      }
    ]).then(function(gitName){
      console.log(answers, gitName);
      const engineer = new Engineer (answers.name, answers.id, answers.email, gitName.gitName)
      
      employeeCardsArr.push(engineer.appendHtml()); 
      console.log(employeeCardsArr);
      
      nextEmployee();
  })
}


function internData(answers){
  inquirer.prompt([
      {
        type: "input",
        message: "What is the interns school name?",
        name: "school"
      }
    ]).then(function(school){
      console.log(answers, school);
      const intern = new Intern (answers.name, answers.id, answers.email, school.school)
      intern.appendHtml()
      nextEmployee();
    })
}


function nextEmployee(response){
  inquirer.prompt([
    {
      type: "list",
        message: "Would you like to add another employee?",
        name: "addNext",
        choices: [
          "yes",
          "no",
        ]
    }
  ]).then(function(response){
if (response.addNext === "yes") {
  newEmployee();
} else {
  employeeCardsStr = employeeCardsArr.join(",");
  generateHTML();
    
  
}
  })
}


// manager icon
// `<div>Icons made by <a href="https://www.flaticon.com/authors/eucalyp" title="Eucalyp">Eucalyp</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>`

// engineer icon
// `<div>Icons made by <a href="https://www.flaticon.com/authors/ultimatearm" title="ultimatearm">ultimatearm</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>`

// student icon
// `<div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>`



////////////////// Write HTML ///////////////////////  
function generateHTML() {

    const html =
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
    <div class="jubotron">
      <h1 class="display-4">Hello, world!</h1>
      <div class="row d-flex justify-content-around">
      ${employeeCardsStr}
      </div>
    </div>
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
writeFileAsync('index.html', html, 'utf8');
};


newEmployee();