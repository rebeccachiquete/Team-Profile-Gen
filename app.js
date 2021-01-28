const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employees = [];

function employeeQuestions() {
    inquirer.prompt([
        {
          type: 'input',
          message: 'What is your name?',
          name: 'name',
        },
        {
          type: 'input',
          message: 'What is your Employee ID?',
          name: 'id',
        },
        {
          type: 'list',
          message: 'What is your current role?',
          name: 'role',
          choices: [
              "Intern",
              "Engineer",
              "Manager"
          ]
        },
      ])
      .then(function (answers){
          if (answers.role === "Intern") {
              internInfo(answers);
          }
          else if (answers.role === "Emgineer") {
              engineerInfo(answers);
          }
          else if (answers.role === "Manager") {
                managerInfo(answers);
          }
      })
}

function internInfo(internAnswers) {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Where do you attent school?',
            name: 'school',
        },
        {
            type: 'checkbox',
            message: 'Would you like to add user?',
            name: 'adduser',
            choices: [
                "Yes",
                "No",
            ]
        },
    ])
    .then (function(internAnswers) {
        let newIntern = newIntern(internAnswers.name, internAnswers.id, internAnswers.role, internAnswers.school)
        employee.push(newIntern)
    });
}

function engineerInfo(engineerAnswers) {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is your GitHub Account?',
            name: 'github',
        },
        {
            type: 'checkbox',
            message: 'Would you like to add user?',
            name: 'adduser',
            choices: [
                "Yes",
                "No",
            ]
        },
    ])
    .then (function(engineerAnswers) {
        let newEngineer = newEngineer(engineerAnswers.name, engineerAnswers.id, engineerAnswers.role, engineerAnswers.github)
        employee.push(newEngineer)
    });
}

function managerInfo(managerAnswers) {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is your office number?',
            name: 'officenumber',
        },
        {
            type: 'checkbox',
            message: 'Would you like to add user?',
            name: 'adduser',
            choices: [
                "Yes",
                "No",
            ]
        },
    ])
    .then (function(managerAnswers) {
        let newManager = newManager(managerAnswers.name, managerAnswers.id, managerAnswers.role, managerAnswers.officenumber)
        employee.push(newManager)
    });
}


