// Importing Employee class
const Employee = require('./Employee');

// Creating Manager class extending from Employee class
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email, 'Manager')
        this.officeNumber = officeNumber
    }

    // Methods for Manager class
    getRole() {
        return 'Manager';
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
};

// Exporting Manager class
module.exports = Manager; 