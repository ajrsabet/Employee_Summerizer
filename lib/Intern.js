const Employee = require("./Employee.js");

class Intern extends Employee {
  constructor (name, id, email, school){
    super(name, id, email)
    this.school = school;
    this.title = 'Intern';
  }

  getSchool(){
    return this.school;
  };

  appendHtml(){
    return `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${this.name}</h5>
      <h5 class="card-subtitle mb-2">${this.role}</h5>
      <ul class="list-group">
        <li class="list-group-item">ID: ${this.id}</li>
        <li class="list-group-item">Email: ${this.email}</li>
        <li class="list-group-item">School: ${this.school}</li>
      </ul>
    </div>
  </div>`
  }
}

module.exports = Intern;