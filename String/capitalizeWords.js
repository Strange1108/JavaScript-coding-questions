function capitalizeWords(str){
    str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}


console.log(capitalizeWords("hello world"));           // "Hello World"
console.log(capitalizeWords("javaScript is awesome")); // "Javascript Is Awesome"
console.log(capitalizeWords("a b c d"));               // "A B C D"
