const Employee = require("../lib/Employee");

class Manager extends Employee {
  constructor(name = "", id = 0, email = "email.com", officeNumber = "") {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
