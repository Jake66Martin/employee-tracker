const db = require("../server.js");

class Queries {
  constructor(db) {
    this.db = db;
  }
  getDepartments() {
    // db.query('SELECT * FROM department', (err, result) => {
    //     if (err) {
    //       console.log(err);
    //     }
    //     console.table(result);
    //   });
    return this.db.promise()
      .query("SELECT * FROM department")
      .then(([rows, fields]) => {
        console.table(rows);
      });
      
  }

  getRoles() {
    db.query("SELECT * FROM role", (err, result) => {
      if (err) {
        console.log(err);
      }
      console.table(result);
    });
  }

  getEmployees() {
    db.query("SELECT * FROM employee", (err, result) => {
      if (err) {
        console.log(err);
      }
      console.table(result);
    });
  }
}

module.exports = Queries;
