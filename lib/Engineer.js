// Importing Employee class
const Employee = require('./Employee');

// Creating Engineer class extending from Employee class
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email, 'Engineer');
        this.github = github

    }

    // Methods for Engineer class
    getRole() {
        return 'Engineer';
    }

    getGithub() {
        return this.github
    }

};

// Exporting Engineer class
module.exports = Engineer;