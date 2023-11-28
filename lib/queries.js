const db = require("../server.js");

class Queries {
  constructor(db) {
    this.db = db;
  }


  getDepartments() {
    return this.db.promise().query("SELECT department.id, department.name FROM department ORDER BY id ASC");
  }

  getRoles() {
   return this.db.promise().query("SELECT * FROM role");
  }

  getEmployees() {
   return this.db.promise().query("SELECT * FROM employee");
  }

  newDepartment(name) {
    return this.db.promise().query("INSERT INTO department (name) VALUES (?)", name)
  }

  newRole() {
    
  }

}

module.exports = new Queries(db);
