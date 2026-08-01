//Find the second largest element.

let arr = [10, 25, 82, 50, 90, 56, 53];

let max = 0;
let second_max = 0;

arr.forEach((num) => {
    if (num > max) {
        second_max = max;
        max = num;
    } else if (num > second_max && num !== max) {
        second_max = num;
    }
});

console.log("Second Highest Number is " + second_max);
