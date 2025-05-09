const arr = [1,2,3,4,5];

function printSomething(el){
    console.log(el);
}
Array.prototype.myForEach = function (cb) {
    console.log("this", this);
    for(let index=0; index<this.length; index++){
        cb(this[index]);
    }
}

arr.myForEach(printSomething);