function CustomPromise(executor) {
  // Step 1
  const PENDING = 'pending';
  const FULFILLED = 'fulfilled';
  const REJECTED = 'rejected';

  let state = PENDING;
  let value = null;
  // Store the success callbacks
  let successHandlers = [];
  // Store the error catch callbacks
  let errorHandlers = [];

  function resolve(val) {
    if (state === PENDING) {
      state = FULFILLED;
      value = val;
      // Execute all success handlers
      successHandlers.forEach(fn => fn(value));
    }
  }

  function reject(reason) {
    if (state === PENDING) {
      state = REJECTED;
      value = reason;
      // Execute all error handlers
      errorHandlers.forEach(cb => cb(value));
    }
  }

  // "then" method returns a promise
  this.then = function (callback) {
    return new CustomPromise(function (resolve, reject) {
      
      // Handle the success callback asynchronously.
      function handleSuccess() {
        try {
          const result = callback ? callback(value) : value;
          //check if the result of then is also a promise
          if (result && typeof result.then === 'function') {
            result.then(resolve, reject);
          } else {
            resolve(result);
          }
        } catch (err) {
          reject(err);
        }
      }

      if (state === FULFILLED) {
        // Call handleSuccess asynchronously
        setTimeout(handleSuccess, 0);
      } else if (state === PENDING) {
        successHandlers.push(handleSuccess);
      }
    });
  };

  // The catch method to add error handlers (syntactic sugar for .then(null, errorCallback))
  this.catch = function (errorCallback) {
    return this.then(null, errorCallback);
  };

  // Step 2
  try {
    executor(resolve, reject);
  } catch (error) {
    reject(error);
  }
}


const executor = (resolve, reject) => {
  console.log('generating number...');
  setTimeout(() => {
    let randomNumber = Math.floor(Math.random() * 10);

    if (randomNumber < 10) {
      resolve(`Random number generated successfully ${randomNumber}.`);
    } else {
      reject('Failed to generate number less than 10 !!');
    }
  }, 1000);
};

const generateNumber = new CustomPromise(executor);

generateNumber.then(result => {
  // Random number generated successfully <random Number>
  console.log(result);
});

generateNumber.catch(error => {
  // Failed to generate a number less than 10 !!
  console.log(error);
});
