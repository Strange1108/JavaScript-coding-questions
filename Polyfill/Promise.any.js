Promise.customAny = function (promises) {
    return new Promise((resolve, reject) => {
      // Step 1
      if (!Array.isArray(promises) || promises.length === 0) {
        reject(new AggregateError([], "All promises were rejected"));
        return;
      }
      
      // Step 2
      let rejections = [];
      let pending = promises.length;

      promises.forEach((promise, index) => {
        // Step 3
        Promise.resolve(promise)
          .then(resolve) // ✅ First fulfilled promise resolves
          .catch((err) => {
            rejections[index] = err;
            pending--;

            // ❌ If all promises are rejected, return AggregateError
            if (pending === 0) {
              reject(new AggregateError(rejections, "All promises were rejected"));
            }
          });
      });
    });
  };

// Test
Promise.customAny([
  new Promise(res => setTimeout(res, 500, "Success A")), // resolved first
  new Promise((res, rej) => setTimeout(rej, 300, "Error B")),
  new Promise(res => setTimeout(res, 600, "Success C")), // resolved second
])
  .then(result => console.log("✅ First resolved:", result))
  .catch(error => console.error("❌ Unexpected error:", error));
