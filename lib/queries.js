const db = require("../server.js");

class Queries {
  constructor(db) {
    this.db = db;
  }
  getDepartments() {
    return this.db.promise().query("SELECT department.id, department.name FROM department;");
  }

  getRoles() {
   return this.db.promise().query("SELECT * FROM role");
  }

  getEmployees() {
   return this.db.promise().query("SELECT * FROM employee");
  }
}

module.exports = new Queries(db);
