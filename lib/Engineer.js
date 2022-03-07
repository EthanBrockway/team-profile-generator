const Employee = require("../lib/Employee");

class Engineer extends Employee {
  constructor(name = "", id = 1, email = "", username = "") {
    super(name, id, email);
    this.github = `https//github.com/${username}`;
  }

  getGithub() {
    return this.github;
  }
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
