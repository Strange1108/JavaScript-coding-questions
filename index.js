const arr = [1, 2, 2, 3, 4, 4, 5];

const uniqueArr = arr.reduce((acc, cur) => {
    if(!acc.includes(cur)) acc.push(cur);
    return acc;
}, [])

console.log(uniqueArr); // Output: [1, 2, 3, 4, 5]
