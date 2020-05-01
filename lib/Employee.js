// Code to define the Employee class
function Employee(name, id, email, role) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;

};

// Functions to obtain properties 
Employee.prototype.getName = function () {
    return this.name;
}

Employee.prototype.getId = function () {
    return this.id;
}

Employee.prototype.getEmail = function () {
    return this.email;
}

Employee.prototype.getRole = function () {
    return "Employee";
}

// Code to export the Employee class
module.exports = Employee; 