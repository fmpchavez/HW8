const Employee = require("./Employee");
const renderHTML = require("./renderHTML.js")

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getRole() {
        return "Engineer";
    }
    getGithub() {
        return this.github;
    }
    getHTML() {
        return renderHTML.engineer(this);
    } 
}

module.exports = Engineer;