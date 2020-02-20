const Employee = require("./Employee");
const renderHTML = require("./renderHTML.js")

class Intern extends Employee {
    constructor (name, id, email, school) {
        super (name, id, email);
        this.school = school;
    }
    getRole() {
        return "Intern";
    }
    getSchool() {
        return this.school;
    }
    getHTML() {
        return renderHTML.intern(this);
    } 
}

module.exports = Intern;