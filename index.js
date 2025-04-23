
new Promise((resolve, reject) => {
    return setTimeout(() => resolve(1), 1000);
}).then((result) => {
    console.log(result);
    return new Promise(resolve => setTimeout(() => resolve(result*2), 2000));
}).then((result) => {
    console.log(result);
    return new Promise(resolve => setTimeout(() => resolve(result*2), 2000));
}).then((result) => {
    console.log(result);
    return new Promise(resolve => setTimeout(() => resolve(result*2), 2000));
}).then(result => console.log(result));