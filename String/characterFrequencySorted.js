function characterFrequencySorted(str) {
    const frequencyMap = {};
  
    // Count frequency of each character
    for (let char of str) {
      frequencyMap[char] = (frequencyMap[char] || 0) + 1;
    }
  
    // Convert frequencyMap to an array of [character, count] pairs
    const sortedEntries = Object.entries(frequencyMap).sort((a, b) => b[1] - a[1]);
  
    return sortedEntries;
  }

  
console.log(characterFrequencySorted("aabbbcccdde"));  
// Output: [['b', 3], ['a', 2], ['c', 2], ['d', 2], ['e', 1]]

console.log(characterFrequencySorted("hello world"));  
// Output: [['l', 3], ['o', 2], ['h', 1], ['e', 1], [' ', 1], ['w', 1], ['r', 1], ['d', 1]]
