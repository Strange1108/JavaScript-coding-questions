function deepMerge(obj1, obj2) {
    // console.log("Merging objects:", obj1, obj2);
  const result = { ...obj1 };

  for (const key in obj2) {
    if (
      typeof obj2[key] === "object" && obj2[key] !== null && !Array.isArray(obj2[key]) && 
      typeof result[key] === "object" && result[key] !== null && !Array.isArray(result[key])
    ) {
        // console.log("Merging key:", key, "Value from obj2:", obj2[key], "Value from result:", result[key]);
      result[key] = deepMerge(result[key], obj2[key]);
    //   console.log("Merged key:", key, "Result after merge:", result[key]);
    } else {
        // console.log("Key:", key, "Value from obj2:", obj2[key], "Value from result:", result[key]);
      result[key] = obj2[key];
        // console.log("Final merged result:", result);
    }
  }
  return result;
}

// const obj1 = {
//   name: "Mahendra",
//   address: {
//     city: "Pune",
//     country: "India"
//   }
// };

// const obj2 = {
//   age: 25,
//   address: {
//     city: "Mumbai",
//     pincode: 411001
//   }
// };



const obj1 = { a: 1, b: { x: 10 } };
const obj2 = { b: { y: 20 }, c: 3 };


const result = deepMerge(obj1, obj2);

console.log(result);