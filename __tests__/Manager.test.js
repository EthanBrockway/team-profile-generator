const Manager = require("../lib/Manager")

it("Should return all of the manager's information", () => {
  const manager = new Manager("Dave", 1, "email.com", "101", "manager")

  expect(manager.getName()).toBe("Dave")
  expect(manager.getId()).toBe(1)
  expect(manager.getEmail()).toBe("email.com")
  expect(manager.getOfficeNumber()).toBe("101")
  expect(manager.getRole()).toBe("Manager")
})
