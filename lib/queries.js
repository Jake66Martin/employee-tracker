const db = require("../server.js")


class Queries {
    constructor () {

    }
    getDepartments() {
        db.query('SELECT * FROM department', (err, result) => {
            if (err) {
              console.log(err);
            }
            console.table(result);
          });
    }

    getRoles() {
        db.query('SELECT * FROM role', (err, result) => {
            if (err) {
              console.log(err);
            }
            console.table(result);
          });
    }


    getEmployees() {
      db.query('SELECT * FROM employee', (err, result) => {
          if (err) {
            console.log(err);
          }
          console.table(result);
        });
  }
}


  module.exports = Queries