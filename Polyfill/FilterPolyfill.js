const arr = [1,2,3,4,5];

Array.prototype.myFilter = function(cb) {
    let res= [];
    for(let index=0; index<this.length; index++){
        if(cb(this[index])) {
            res.push(this[index]);
        }
    }
    return res;
}


const res = arr.myFilter((el) => el>2);
console.log(res);