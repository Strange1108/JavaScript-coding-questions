
function firstNonRepeatingCharacter(str){

    const frequency = {};
    for(let char of str){
        frequency[char] = (frequency[char] || 0) + 1;
    }

    for(let char of str){
        if(frequency[char]===1){
            return  char;
        }
    }

    return null;
}

console.log(firstNonRepeatingCharacter("swiss"));   // 'w'
console.log(firstNonRepeatingCharacter("racecar"));  // 'e'
console.log(firstNonRepeatingCharacter("aabbcc"));   // null (no non-repeating characters)
console.log(firstNonRepeatingCharacter("abcdef"));   // 'a'
