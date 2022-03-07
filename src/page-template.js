const generateEmployees = (employees) => {
  return `<section id="employees">
    ${employees
      .filter(({ officeNumber }) => officeNumber !== undefined)
      .map((manager) => {
        return `<div class="card">
            <div class="card-header">
            <h3>${manager.getName()}</h3> <h3>${manager.getRole()}</h3></div> 
            <div class="card-body">
            <ul>
                <li>ID: ${manager.getId()}</li> 
                <li>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li> 
                <li>Office Number: ${manager.getOfficeNumber()}</li>
                </ul>
                </div>
                </div>
            `;
      })
      .join("")}
    ${employees
      .filter(({ github }) => github !== undefined)
      .map((engineer) => {
        return `<div class="card">
            <div class="card-header">
            <h3>${engineer.getName()}</h3> <h3>${engineer.getRole()}</h3></div> 
            <div class="card-body">
            <ul>
                <li>ID: ${engineer.getId()}</li> 
                <li>Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li> 
                <li>GitHub: <a href=${engineer.getGithub()} target="_blank">GitHub</a></li>
                </ul>
                </div>
                </div>
            `;
      })
      .join("")}
    ${employees
      .filter(({ school }) => school !== undefined)
      .map((intern) => {
        return `<div class="card">
            <div class="card-header">
            <h3>${intern.getName()}</h3> <h3>${intern.getRole()}</h3></div>
            <div class="card-body">
            <ul>
                <li>ID: ${intern.getId()}</li> 
                <li>Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li> 
                <li>School: ${intern.getSchool()}</li>
                </ul>
                </div>
                </div>
            `;
      })
      .join("")}
</section>
`;
};

module.exports = (employees) => {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>team-generator</title>
        <link rel="stylesheet" href="../src/style.css">
    </head>
    <body>
   <div class=header>
       <h1>The Dream Team</h1>
   </div>
   <div class="container">
   ${generateEmployees(employees)}
         </div> 
    </body>
    </html>`;
};
