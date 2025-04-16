function deepCompare(obj1, obj2) {
    // Check if both parameters are objects
    if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
      return obj1 === obj2;
    }
  
    // Get the keys of each object
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
  
    // Check if the number of keys is the same
    if (keys1.length !== keys2.length) {
      return false;
    }
  
    // Iterate through keys and recursively compare values
    for (const key of keys1) {
      if (!keys2.includes(key) || !deepCompare(obj1[key], obj2[key])) {
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
