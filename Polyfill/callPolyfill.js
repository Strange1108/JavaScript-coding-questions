let person = {
  firstname: "Kirtesh",
  lastname: "bansal"
}

let printName = function (country) {
  console.log(this.firstname + " " + this.lastname + " from " 
  + country);
}

printName.call(person, "India");