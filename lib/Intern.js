const Employee = require("../lib/Employee")

class Intern extends Employee {
  constructor(name = "", id = 0, email = "", school = "") {
    super(name, id, email)
    this.school = school
  }

  getSchool = () => {
    return this.school
  }
}

module.exports = Intern
