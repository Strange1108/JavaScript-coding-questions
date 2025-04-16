let str = "Hello World"
const vowels = "aeiouAEIOU";
let count=0;
for(let char of str){
    if(vowels.includes(char)) count++;
}

console.log(count);