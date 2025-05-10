const arr = [1,2,3,4,5];

Array.prototype.myMap = function (cb) {
    const res = [];
    for(let index=0; index<this.length; index++){
        res.push(cb(this[index], index, this))
    }
    return res;
}

const res = arr.myMap((el) => el*2);
console.log(res);