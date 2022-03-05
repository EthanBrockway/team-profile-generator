const Engineer = require("../lib/Engineer")
it("should return all of the engineer's information", () => {
  const Engineer = new Engineer("Dave", 1, "email.com", "username", "engineer")

  expect(Engineer.getName()).toBe("Dave")
  expect(Engineer.getId()).toBe(1)
  expect(Engineer.getEmail()).toBe("email.com")
  expect(Engineer.getGithub()).toBe("username")
  expect(Engineer.getRole()).toBe("engineer")
})
