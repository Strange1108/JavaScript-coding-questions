let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://no-such-url'
  ];
  
  Promise.allSettled(urls.map(url => fetch(url)))
    .then(results => { // (*)
      results.forEach((result, num) => {
        if (result.status == "fulfilled") {
          console.log(`${urls[num]}: ${result.value.status}`);
        }
        if (result.status == "rejected") {
          console.log(`${urls[num]}: ${result.reason}`);
        }
      });
    });
    