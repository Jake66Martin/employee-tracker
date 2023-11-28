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

  newRole(title, salary, department_id) {
    return this.db.promise().query("INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)", [title, salary, department_id])
  }

  newEmployee(firstname, lastname, roleid, managerid) {
    return this.db.promise().query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)", [firstname, lastname, roleid, managerid])
  }

  updateEmployee(role, id) {
    return this.db.promise().query("UPDATE employee SET role_id = ? WHERE id = ?", [role, id])
  }

  updateEmployeeManager(manager, id) {
    return this.db.promise().query("UPDATE employee SET manager_id = ? WHERE id = ?", [manager, id])
  }

  viewEmployeeByManager(id) {
    return this.db.promise().query("SELECT * FROM employee WHERE manager_id = ?", id)
  }

  viewEmployeeByDepartment(id) {
    return this.db.promise().query("SELECT * FROM employee WHERE department_id = ?", id)
  }

  viewEmployeeByDepartment(id) {
    return this.db.promise().query(`
    SELECT employee.id, employee.first_name, employee.last_name, role.id, role.department_id
    FROM employee
    JOIN role ON employee.role_id = role.id
    WHERE role.department_id = ?;`, id)
  }

  deleteDepartment(id) {
    return this.db.promise().query("DELETE FROM department WHERE id = ?;", id)
  }

}

module.exports = new Queries(db);
