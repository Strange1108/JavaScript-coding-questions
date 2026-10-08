let str = "Hello World"

let count=0;
const vowels = ['a', 'e', 'i', 'o', 'u'];

for (let i = 0; i < str.length; i++) {
    if(vowels.includes(str[i].toLocaleLowerCase())) {
        count++;
    }
}
console.log("Number of vowels in the string: " + count);