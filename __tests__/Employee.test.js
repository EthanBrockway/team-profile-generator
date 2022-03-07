const Employee = require("../lib/Employee");

it("Should return all of the employee's information", () => {
  const employee = new Employee("Dave", 1, "email.com");

  expect(employee.getName()).toBe("Dave");
  expect(employee.getId()).toBe(1);
  expect(employee.getEmail()).toBe("email.com");
});
