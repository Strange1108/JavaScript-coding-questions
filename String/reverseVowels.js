function reverseVowels(str) {
    const vowels = 'aeiouAEIOU';
    const chars = str.split(''); // Convert string to an array
    let vowelIndices = [];
    let vowelChars = [];
  
    // Collect the vowels and their indices
    for (let i = 0; i < chars.length; i++) {
      if (vowels.includes(chars[i])) {
        vowelIndices.push(i);
        vowelChars.push(chars[i]);
      }
    }
  
    // Reverse the vowel characters
    vowelChars.reverse();
  
    // Place the reversed vowels back into their original positions
    for (let i = 0; i < vowelIndices.length; i++) {
      chars[vowelIndices[i]] = vowelChars[i];
    }
  
    return chars.join(''); // Convert the array back to a string
  }
  
console.log(reverseVowels("hello"));          // "holle"
console.log(reverseVowels("leetcode"));      // "leotcede"
console.log(reverseVowels("aA"));            // "Aa"
console.log(reverseVowels("example"));       // "exampel"
