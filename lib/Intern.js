// Importing Employee class
const Employee = require('./Employee');

// Creating Intern class extending from Employee class
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    // Methods for Intern class
    getRole() {
        return 'Intern';
    }

    getSchool() {
        return this.school;
    }
}

// Exporting Intern class
module.exports = Intern;