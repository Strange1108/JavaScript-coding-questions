function sortByAge(arr) {
    arr.sort((a,b) => a.age-b.age)
}

function sortByName(arr){
    arr.sort((a,b) => a.name.localeCompare(b.name));
}
  
  let john = { name: "John", age: 25 };
  let pete = { name: "Pete", age: 30 };
  let mary = { name: "Mary", age: 28 };
  
  let arr = [ pete, john, mary ];
  
  sortByAge(arr);
  
  // now sorted is: [john, mary, pete]
  console.log(arr[0].name); // John
  console.log(arr[1].name); // Mary
  console.log(arr[2].name); // Pete
  