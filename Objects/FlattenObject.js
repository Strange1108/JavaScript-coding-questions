function flattenObject(obj, parentKey = '', result = {}) {
    
    for(let [key, val] of Object.entries(obj)){
        let newKey = parentKey ? `${parentKey}.${key}` : key;
        if(typeof val === 'object' && val!==null && !Array.isArray(val)){
            flattenObject(val, newKey, result);
        } else{
            result[newKey] = val;
        }
    }
    return result;
    
}

const nested = {
    a: 1,
    b: {
      c: 2,
      d: {
        e: 3
      }
    },
    f: 4
  };
  
  const flat = flattenObject(nested);
  console.log(flat);
  