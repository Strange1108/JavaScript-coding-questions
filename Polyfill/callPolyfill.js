// let person = {
//   firstname: "Kirtesh",
//   lastname: "bansal"
// }

// let printName = function (country) {
//   console.log(this.firstname + " " + this.lastname + " from " 
//   + country);
// }

// printName.call(person, "India");

let person = {
  firstname: "Kirtesh",
  lastname: "bansal"
}

let printName = function (country) {
  console.log(this.firstname + " " + this.lastname + " from " 
  + country);
}

Function.prototype.mycall = function(obj,...args){ 
    let sym = Symbol();                                     
    obj[sym] = this;
    let res = obj[sym](...args)
    delete obj[sym];
    return res;
}

/*
Note: Applying mycall method to printName function so this
will be equal to printName inside mycall function as 
printName is on the left side of the '.' 
*/

printName.mycall(person, "India");

