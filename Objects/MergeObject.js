function deepMerge(target, source) {
  for (let key in source) {
    if (
      source.hasOwnProperty(key) &&
      typeof source[key] === 'object' &&
      source[key] !== null &&
      !Array.isArray(source[key])
    ) {
      if (!target[key]) target[key] = {};
      deepMerge(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  }
  return target;
}

const obj1 = { a: 1, b: { x: 10 } };
const obj2 = { b: { y: 20 }, c: 3 };

const result = deepMerge({}, obj1);
deepMerge(result, obj2);

console.log(result); 
// { a: 1, b: { x: 10, y: 20 }, c: 3 }
