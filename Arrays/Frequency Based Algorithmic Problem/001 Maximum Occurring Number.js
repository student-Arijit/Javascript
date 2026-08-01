//Find the most frequent element in an array.

let arr = [10, 25, 82, 50, 90, 25, 56, 56, 53];

let occur = {};

arr.forEach((num) => {
    occur[num] = (occur[num] || 0) + 1;
});

const [maxKey, maxValue] = Object.entries(occur).reduce((max, curr) => curr[1] > max[1] ? curr : max);

console.log("The maximum occurence is " + maxKey + ", " + maxValue + " times.")
