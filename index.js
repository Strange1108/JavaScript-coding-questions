function deepCompare(obj1, obj2) {
    if(typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1===null || obj2===null)
    {
        return obj1 === obj2;
    }

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    
    if (keys1.length !== keys2.length) {
        return false;
      }
    

    for(const key of keys1){
        if(!keys2.includes(key) || !deepCompare(obj1[key], obj2[key]))
        {
            return false;
        }
    }
    return true;
  }
  

const obj1 = { a: 1, b: { c: 2, d: [3, 4] } };
const obj2 = { a: 1, b: { c: 2, d: [3, 4] } };
const obj3 = { a: 1, b: { c: 2, d: [4, 3] } };

console.log(deepCompare(obj1, obj2)); // true
console.log(deepCompare(obj1, obj3)); // false
