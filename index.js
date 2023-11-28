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
      message: "What is the name of the department?"
    }
  ])
    .then(res => {
      let name = res.name;
      console.log(name)
      Queries.newDepartment(name)
        .then(() => console.log(`Added ${name} to the database`))
        .then(() => init())
    })
}

function addRole() {
  inquirer
  .prompt([
    {
      name: "name",
      message: "What is the name of the role?"
    }
  ])
    .then(res => {

      const name = res.name

       inquirer
      .prompt([
        {
          name: "salary",
          message: "What is the salary?"
        }
      ]).then( res => {

        const salary = res.salary

        inquirer
        .prompt([
          {
            name: "department",
            message: "What is the name of the department?"
          }
        ])
      }).then (res => {

        const department = res.department

        console.log(name)
        console.log(salary)
        console.log(department)
      })
      // let name = res;
      // Queries.newDepartment(name.name)
      //   .then(() => console.log(`Added ${name.name} to the database`))
      //   .then(() => init())
    })
}

function quit() {
  process.exit();
}
