const original = { a: 1, b: 2, c: 1 };

const inverted = {};

for(const [key, value] of Object.entries(original)){
    inverted[value] = inverted[value] ? [...inverted[value, key]]: inverted[key];
} 

console.log(inverted);