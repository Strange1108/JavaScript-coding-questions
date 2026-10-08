function shuffle(array) {
  const result = [...array];

  for (let i = 0; i < result.length; i++) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

    [result[i], result[randomIndex]] =
      [result[randomIndex], result[i]];
  }

  return result;
}

let arr = [1, 2, 3];
console.log(shuffle(arr));
console.log(shuffle(arr));
console.log(shuffle(arr));