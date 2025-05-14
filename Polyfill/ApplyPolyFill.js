// let person = {
//   firstname: "Kirtesh",
//   lastname: "bansal"
// }

// let printName = function (country) {
//   console.log(this.firstname + " " + this.lastname + " from " 
//   + country);
// }

// printName.apply(person, ["India"]);


let person = {
  firstname: "Kirtesh",
  lastname: "bansal"
}

let printName = function (country) {
  console.log(this.firstname + " " + this.lastname + " from " 
  + country);
}

Function.prototype.myapply = function(obj,...args){
  let sym = Symbol();                                     
  obj[sym] = this;
  let res = obj[sym](...args[0]); 
  delete obj[sym];
  return res;
}

printName.myapply(person, ["India"]);
