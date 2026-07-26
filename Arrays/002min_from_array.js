//Find the minimum element in an array.

let arr = [1, 8, 6, 5, 5, 10, 3, 4];

let min = arr[0];
arr.forEach ((num) => {
    min = min < num ? min : num;
});
console.log(min);
