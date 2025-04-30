function memoize(fn) {
    const cache = new Map();
    return function (...args) {
      // Create a reliable cache key
      const key = args
        .map((arg) => {
          if (typeof arg === "object" && arg !== null) {
            return JSON.stringify(Object.entries(arg).sort());
          }
          return JSON.stringify(arg);
        })
        .join("|");
      if (cache.has(key)) {
        return cache.get(key);
      }
      const result = fn(...args);
      cache.set(key, result);
      return result;
    };
  }
  
  // Example 1t
  function expensiveFunction(a, b) {
    return a + b;
  }
  const memoizedExpensiveFunction = memoize(expensiveFunction);
  console.log(memoizedExpensiveFunction(1, 2)); // Output: 3 (calculated)
  console.log(memoizedExpensiveFunction(1, 2)); // Output: 3 (cached)
  // Example 2:
  function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
  }
  const memoizedFactorial = memoize(factorial);
  console.log(memoizedFactorial(5)); // Output: 120 (calculated)
  console.log(memoizedFactorial(5)); // Output: 120 (cached)
  