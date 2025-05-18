// Promise.all Polyfill
Promise.customAll = function (promisesItr) {
	// Step 1: 👇 all() return a Single Promise
	return new Promise((resolve, reject) => {

		// Step 2: 👇 
		// "result" to capture promise response.
		// "completed" counter to count how many promises are completed.
		const result = [];
		let completed = 0;

		// Step 3: 👇 return empty [] if input iterable is empty.
		if (promisesItr.length === 0) {
			resolve(result);
		}

		// Step 4: 👇 Execute each promise of promisesItr
		for (let i = 0; i < promisesItr.length; i++) {
			Promise.resolve(promisesItr[i])
				.then((response) => {
					// Step 4.1: 👇 If promise fulfilled then store its response in result and increment the completed counter.
					result[i] = response;
					completed++;

					// Step 4.2: 👇 Check if all the promises got fulfilled,
					// In this case, resolve and return the result array
					if (completed === promisesItr.length) {
						resolve(result);
					}
				})
				.catch((error) => {
					// Step 4.3: 👇 If any promie fails, reject with error
					reject(error);
				});
		}
	});
};

// const p1 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve("Promise 1 Resolved after 1sec")
// 	}, 1000);
// });
// const p2 = "Promise 2 Resolved !!"
// const p3 = Promise.resolve("Promise3 resolved !!");
// const p4 = "Promise4 resolved !!";

// Promise.customAll([p1, p2, p3, p4])
// 	.then((result) => {
// 		console.log("Result customAll -> ", result);
// 	})
// 	.catch((error) => {
// 		console.log("Error customAll ->", error);
// 	});
/*
Output:
Result customAll ->  ["Promise 1 Resolved after 1sec", "Promise 2 resolved", "Promise3 resolved !!", "Promise4 resolved !!"]
*/

const p1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Promise 1 Resolved after 1sec")
	}, 1000);
})
const p2 = Promise.reject("Promise2: Rejected Error !!");
// Or
// const p2 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		reject("Promise2: Rejected Error !!");
// 	}, 2000);
// })
const p3 = Promise.resolve("Promise3 resolved !!");
const p4 = "Promise4 resolved !!";

Promise.customAll([p1, p2, p3, p4])
	.then((result) => {
		console.log("Result customAll -> ", result);
	})
	.catch((error) => {
		console.log("Error customAll ->", error);
	});
/*
Output:
Result customAll -> Promise2: Rejected Error !!
*/
