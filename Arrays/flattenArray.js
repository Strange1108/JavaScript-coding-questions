function flattenArray(arr) {
    return arr.reduce((acc, val) => 
      Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val)
    , []);
  }

  function flattenArray(arr) {
    const result = [];

    for (const item of arr) {
        if (Array.isArray(item)) {
            result.push(...flattenArray(item));
        } else {
            result.push(item);
        }
    }

    return result;
}
  
  const arr = [1, [2, [3, 4]], 5];
  console.log(flattenArray(arr)); 
  // Output: [1, 2, 3, 4, 5]
  