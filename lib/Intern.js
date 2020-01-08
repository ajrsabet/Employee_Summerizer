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
    return `<div class="col-3">
    <div class="card bg-info mb-3" style="max-width: 18rem;">
      <div class="card-body">
        <div class="card-header">
          <img src="https://img.icons8.com/ios-filled/50/000000/graduation-cap.png"  style="width: 30px; float: right;">
          <h5 class="card-title">${this.name}</h5>
          <h5 class="card-subtitle mb-2">${this.title}</h5>
        </div>
      <ul class="list-group">
        <li class="list-group-item">ID: ${this.id}</li>
        <li class="list-group-item">Email: ${this.email}</li>
        <li class="list-group-item">School: ${this.school}</li>
      </ul>
    </div>
    </div>
  </div>`
  }
}

module.exports = Intern;