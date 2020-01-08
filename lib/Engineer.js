const Employee = require("./Employee.js");

class Engineer extends Employee {
  constructor (name, id, email, github){
    super(name, id, email);
    this.github = github;
    this.title = 'Engineer';
  }

  getGithub(){
    return this.github;
  };
  
  appendHtml(){
    return `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${this.name}</h5>
      <h5 class="card-subtitle mb-2">${this.title}</h5>
      <ul class="list-group">
        <li class="list-group-item">ID: ${this.id}</li>
        <li class="list-group-item">Email: ${this.email}</li>
        <li class="list-group-item">GitHub: ${this.github}</li>
      </ul>
    </div>
    </div>`
  }
}

module.exports = Engineer;