Promise.customAllSettled = function(promises) {
    return Promise.all(
      promises.map(promise =>
        Promise.resolve(promise)
          .then(value => ({ status: 'fulfilled', value }))
          .catch(reason => ({ status: 'rejected', reason }))
      )
    );
};



// Example: Multiple DOG API calls handled using Promise.allSettled()

// Helper function to fetch a random dog image from the Dog API
function fetchDogImage(urlPath) {
  return fetch(`https://dog.ceo/api/breeds/image/${urlPath}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch dog image');
      }
      return response.json();
    })
}

// Simulating multiple Dog API calls, with some failures
const apiCalls = [
  fetchDogImage('random'), // Successful call
  fetchDogImage('random'), // Successful call
  fetchDogImage('random'), // Successful call
  fetchDogImage('failed'), // Simulate a failure here by causing an error in the URL (incorrect API endpoint)
  fetchDogImage('random')  // Successful call
];

// Use Promise.allSettled to handle all API calls
Promise.allSettled(apiCalls)
  .then(results => {  
    results.forEach((result, index) => {
      if (result.status === 'fulfilled') {
        console.log(`API call ${index + 1}: Success! Dog image URL`, result.value);
      } else {
        console.log(`API call ${index + 1}: Failed. Reason:`, result.reason);
      }
    });
  })
  .catch(error => {
    console.error('Unexpected error occurred:', error);
  });
