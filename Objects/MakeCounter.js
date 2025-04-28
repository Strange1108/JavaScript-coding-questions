function makeCounter(initialValue = 0) {
    let count = initialValue;
    return {
        increment: function () {
            count++;
            return count;
        },
        decrement: function () {
            count--;
            return count;
        },
        reset: function () {
            count = initialValue;
            return count;
        },
        getValue: function () {
            return count;
        }
    }
}

const counter = makeCounter(5);
console.log(counter.increment());// 6
console.log(counter.increment()); // 7
console.log(counter.decrement()); // 6
console.log(counter.reset()); //5
console.log(counter.decrement()); // 4

