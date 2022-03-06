const inquirer = require("inquirer")
const employees = []
const Employee = require("./lib/Employee.js")
const Manager = require("./lib/Manager.js")
const Engineer = require("./lib/Engineer.js")

function startPrompt() {
  inquirer
    .prompt({
      type: "list",
      name: "type",
      message:
        "Would you like to add an Engineer or an Intern to this project?",
      choices: ["Engineer", "Intern"],
    })
    .then((answer) => {
      if (answer.type === "Engineer") {
        engineerPrompt().then((object) => {
          let { name, ID, email, github } = object
          employees.push(new Engineer(name, ID, email, github))
          return finishPrompt()
        })
      } else {
        internPrompt().then((object) => {
          let { name, ID, email, school } = object
          memberList.push(new Intern(name, ID, email, school))
          return finishPrompt()
        })
      }
    })
}

function internPrompt() {}

function engineerPrompt() {}
startPrompt()
