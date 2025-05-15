// let person = {
//   firstname: "Kirtesh",
//   lastname: "bansal"
// }

// let printName = function (country) {
//   console.log(this.firstname + " " + this.lastname + " from " 
//   + country);
// }

// let newPrintName = printName.bind(person, "India");
// newPrintName();


let person = {
  firstname: "Kirtesh",
  lastname: "bansal"
}

let printName = function (country) {
  console.log(this.firstname + " " + this.lastname + " from " 
  + country);
}

Function.prototype.mybind = function(object,...args){
  let func = this;
  return function (...args1) {
    return func.apply(object, [...args, ...args1]);
  }
}

let newPrintName = printName.mybind(person, "India");
newPrintName();
