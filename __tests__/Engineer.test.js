const Engineer = require("../lib/Engineer");

it("should return all of the engineer's information", () => {
  const engineer = new Engineer("Dave", 1, "email.com", "username", "engineer");

  expect(engineer.getName()).toBe("Dave");
  expect(engineer.getId()).toBe(1);
  expect(engineer.getEmail()).toBe("email.com");
  expect(engineer.getGithub()).toBe("username");
  expect(engineer.getRole()).toBe("Engineer");
});
