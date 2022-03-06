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
          employees.push(new Intern(name, ID, email, school))
          return finishPrompt()
        })
      }
    })
}

function internPrompt() {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the intern's name?",
    },
    {
      type: "input",
      name: "ID",
      message: "What is the intern's ID?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the intern's email?",
    },
    {
      type: "input",
      name: "school",
      message: "Where did the intern graduate?",
    },
  ])
}

function engineerPrompt() {
  return inquirer.prompt({
    type: "input",
    name: "name",
    message: "What is the engineer's name?",
},
{
    type: "input",
    name: "ID",
    message: "What is the engineer's ID?",
},{
    type: "input",
    name: "email",
    message: "What is the engineer's email?",
},{
    type: "input",
    name: "github",
    message: "What is the engineer's github?",
})
}

)
}
startPrompt()
