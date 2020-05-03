// Importing Employee class
const Employee = require('./Employee');

// Creating Manager class extending from Employee class
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber
        this.role = "Manager";
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