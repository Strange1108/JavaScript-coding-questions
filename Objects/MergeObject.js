

function deepEqual(a, b) {
    // Check for strict equality
    if (a === b) return true;
  
    // Check for null or non-object types
    if (typeof a !== "object" || typeof b !== "object" || a === null || b === null) {
      return false;
    }
  
    // Compare keys length
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
  
    if (keysA.length !== keysB.length) return false;
  
    // Recursively compare each key
    for (let key of keysA) {
      if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
        return false;
      }
    }
  
    return true;
  }
  


const obj1 = { a: 1, b: { c: 2, d: [3, 4] } };
const obj2 = { a: 1, b: { c: 2, d: [3, 4] } };
const obj3 = { a: 1, b: { c: 2, d: [4, 3] } };

console.log(deepEqual(obj1, obj2)); // true
console.log(deepEqual(obj1, obj3)); // false
