function groupById(array) {
  return array.reduce((acc, item) => {
    if (!acc[item.id]) {
      acc[item.id] = [];
    }
    acc[item.id].push(item);
    return acc;
  }, {});
}

  
let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
  {id: 'john', name: "Marine Smith", age: 20}

];

let usersById = groupById(users);

console.log(usersById)