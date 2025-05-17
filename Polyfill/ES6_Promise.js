class CustomPromise {
  // Step 1
  static STATE = {
    PENDING: 'pending',
    FULFILLED: 'fulfilled',
    REJECTED: 'rejected',
  };

  constructor(executor) {
    this.state = CustomPromise.STATE.PENDING;
    this.value = null;
    this.successHandlers = [];
    this.errorHandlers = [];

    const resolve = (val) => {
      if (this.state === CustomPromise.STATE.PENDING) {
        this.state = CustomPromise.STATE.FULFILLED;
        this.value = val;
        this.successHandlers.forEach(callback => callback(this.value));
      }
    };

    const reject = (reason) => {
      if (this.state === CustomPromise.STATE.PENDING) {
        this.state = CustomPromise.STATE.REJECTED;
        this.value = reason;
        this.errorHandlers.forEach(callback => callback(this.value));
      }
    };
    
    // Step 2
    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(callback) {
    return new CustomPromise((resolve, reject) => {
        const handleSuccess = ()=>{
            try{
                const result = callback ? callback(this.value) : this.value;
                if(result && typeof result.then === 'function'){
                    result.then(resolve, reject)
                }else{
                    resolve(result)
                }
            }catch(err){
                reject(err);
            }
        }
      if (this.state === CustomPromise.STATE.FULFILLED) {
          setTimeout(handleSuccess, 0);
      } else if (this.state === CustomPromise.STATE.PENDING) {
        this.successHandlers.push(handleSuccess);
      }
    });
  }

  catch(errorCallback) {
    return this.then(null, errorCallback);
  }
}

const executor = (resolve, reject) => {
  console.log('generating number...');
  setTimeout(() => {
    let randomNumber = Math.floor(Math.random() * 10);

    if (randomNumber < 7) {
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
