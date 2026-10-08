function reverseVowels(str) {
    const vowels = 'aeiouAEIOU';
    const chars = str.split('');

    let left = 0;
    let right = chars.length - 1;

    while (left < right) {

        while (left < right && !vowels.includes(chars[left])) {
            left++;
        }

        while (left < right && !vowels.includes(chars[right])) {
            right--;
        }

        // Swap vowels
        [chars[left], chars[right]] = [chars[right], chars[left]];

        left++;
        right--;
    }

    return chars.join('');
}
  
console.log(reverseVowels("hello"));          // "holle"
console.log(reverseVowels("leetcode"));      // "leotcede"
console.log(reverseVowels("aA"));            // "Aa"
console.log(reverseVowels("example"));       // "exampel"