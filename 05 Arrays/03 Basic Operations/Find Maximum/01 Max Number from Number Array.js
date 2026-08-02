//Find the maximum element in an array.

let arr = [1, 8, 6, 5, 5, 10, 3, 4];

let max = 0;
arr.forEach ((num) => {
    max = max > num ? max : num;
});
console.log(max);