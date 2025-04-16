function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
  
      [array[i], array[j]] = [array[j], array[i]];
    }   
  }
  


let arr = [1, 2, 3];
shuffle(arr);
// arr = [3, 2, 1]
console.log(arr);
shuffle(arr);
// arr = [2, 1, 3]
console.log(arr);
shuffle(arr);
// arr = [3, 1, 2]
console.log(arr);