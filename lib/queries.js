const db = require("../server.js")

class Queries {
    constructor () {

    }
    getDepartments() {
        db.query('SELECT * FROM department', (err, result) => {
            if (err) {
              console.log(err);
            }
            console.log(result);
          });
    }

    getRoles() {
        db.query('SELECT * FROM role', (err, result) => {
            if (err) {
              console.log(err);
            }
            console.log(result);
          });
    }
}


  module.exports = Queries