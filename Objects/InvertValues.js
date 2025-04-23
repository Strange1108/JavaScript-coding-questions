const original = { a: 1, b: 2, c: 1 };
const inverted = {};

for (const [key, value] of Object.entries(original)) {
  if (inverted[value]) {
    inverted[value].push(key);
  } else {
    inverted[value] = [key];
  }
}

console.log(inverted);
