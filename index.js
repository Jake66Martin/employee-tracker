const inquirer = require('inquirer');
const Queries = require('./lib/queries')

const choices = [
    "view all departments",
    "view all roles",
    "view all employees",
    "add a department",
    "add a role",
    "add an employee",
    "update an employee role"
]

function init() {

    inquirer
  .prompt([
    {
        type: 'list',
        message: 'What would you like to do?',
        name: 'options',
        choices: [choices[0], choices[1], choices[2], choices[3], choices[4], choices[5], choices[6]]
      }
   
  ])
  .then((response) => {
    
    
    if (response.options === choices[0]) {
        console.log('hello')
    }


    if (response.options === choices[0]) {
       const getdepartment = new Queries
        const data = getdepartment.getDepartments()
        console.log(data)
      }

   
    
  
})
};

init();