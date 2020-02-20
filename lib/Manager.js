const Employee = require ("./Employee");
const renderHTML = require("./renderHTML.js")

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole() {
        return "Manager";
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getHTML() {
        return renderHTML.manager(this);
    } 
}

module.exports = Manager;