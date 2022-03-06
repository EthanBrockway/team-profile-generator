const Intern = require("../lib/Intern")

it("Should return all of the interns information", () => {
  const intern = new Intern("Dave", 1, "email.com")

  expect(intern.getName()).toBe("Dave")
  expect(intern.getId()).toBe(1)
  expect(intern.getEmail()).toBe("email.com")
  expect(intern.getSchool()).toBe("School")
})
