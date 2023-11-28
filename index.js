const inquirer = require("inquirer");
const Queries = require("./lib/queries");

const choices = [
  "view all departments",
  "view all roles",
  "view all employees",
  "add a department",
  "add a role",
  "add an employee",
  "update an employee role",
];

function mainPrompt() {
  inquirer

    .prompt([
      {
        type: "list",
        message: "What would you like to do?",
        name: "options",
        choices: [
          choices[0],
          choices[1],
          choices[2],
          choices[3],
          choices[4],
          choices[5],
          choices[6],
        ],
      },
    ])
    .then((response) => {
      let choice = response.options;

      switch (choice) {
        case choices[0]:
          viewDepartment();
          break;
        case choices[1]:
          viewRoles();
          break;
        case choices[2]:
          viewEmployees();
          break;
        case choices[3]:
          addDepartment();
          break;
        case choices[4]:
          addRole();
          break;
        case choices[5]:
          addEmployee();
          break;
        case choices[6]:
          updateEmployee();
          break;

        default:
          quit();
      }
    });
}
function init() {
  mainPrompt();
}

init();

const viewDepartment = function () {
  Queries.getDepartments()
    .then(([result]) => {
      let department = result;
      console.log("\n");
      console.table(department);
    })
    .then(() => init());
};

const viewRoles = function () {
  Queries.getRoles()
    .then(([result]) => {
      let role = result;
      console.log("\n");
      console.table(role);
    })
    .then(() => init());
};

const viewEmployees = function () {
  Queries.getEmployees()
    .then(([result]) => {
      let employee = result;
      console.log("\n");
      console.table(employee);
    })
    .then(() => init());
};

function addDepartment() {
  inquirer
    .prompt([
      {
        name: "name",
        message: "What is the name of the department?",
      },
    ])
    .then((res) => {
      let name = res.name;
      console.log(name);
      Queries.newDepartment(name)
        .then(() => console.log(`Added ${name} to the database`))
        .then(() => init());
    });
}

function addRole() {
  inquirer
    .prompt([
      {
        name: "title",
        message: "What is the title of the role?",
      },
    ])
    .then((res) => {
      const title = res.title;

      inquirer
        .prompt([
          {
            name: "salary",
            message: "What is the salary?",
          },
        ])
        .then((res) => {
          const salary = res.salary;

          inquirer
            .prompt([
              {
                name: "department",
                message: "What is the department id?",
              },
            ])
            .then((res) => {
              const department = res.department;

              console.log(title);
              console.log(salary);
              console.log(department);

              Queries.newRole(title, salary, department)
                .then(() => console.log(`Added role to the database`))
                .then(() => init());
            });
        });
    });
}

function addEmployee() {
  inquirer
    .prompt([
      {
        name: "firstname",
        message: "What is the employees first name",
      },
    ])
    .then((res) => {
      const firstname = res.firstname;

      inquirer
        .prompt([
          {
            name: "lastname",
            message: "What is the employees last name?",
          },
        ])
        .then((res) => {
          const lastname = res.lastname;

          inquirer
            .prompt([
              {
                name: "roleid",
                message: "What is the employees role id?",
              },
            ])
            .then((res) => {
              const roleid = res.roleid;

              inquirer
                .prompt([
                  {
                    name: "managerid",
                    message: "What is the employees manager id?",
                  },
                ])
                .then((res) => {
                  let managerid = res.managerid;

                  if (managerid === "null") {
                    managerid = null;
                  }

                  console.log(firstname);
                  console.log(lastname);
                  console.log(roleid);
                  console.log(managerid);

                  Queries.newEmployee(firstname, lastname, roleid, managerid)
                    .then(() => console.log(`Added employee to the database`))
                    .then(() => init());
                });
            });
        });
    });
}

function updateEmployee() {
  inquirer
    .prompt([
      {
        name: "id",
        message: "What is the employee id?",
      },
    ])
    .then((res) => {
      const id = res.id;

      inquirer
        .prompt([
          {
            name: "role",
            message: "What is the new role id?",
          },
        ])
        .then((res) => {
          const role = res.role;

          console.log(id);
          console.log(role);
          

          Queries.updateEmployee(role, id)
            .then(() => console.log(`Updated employee role to the database`))
            .then(() => init());
        });
    });
}

function quit() {
  process.exit();
}
