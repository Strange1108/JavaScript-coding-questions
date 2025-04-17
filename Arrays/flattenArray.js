function flattenArray(arr) {
    return arr.reduce((acc, val) => 
      Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val)
    , []);
  }
  
  const arr = [1, [2, [3, 4]], 5];
  console.log(flattenArray(arr)); 
  // Output: [1, 2, 3, 4, 5]
  