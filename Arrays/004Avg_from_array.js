//Compute the average of all elements.

let arr = [10, 25, 82, 50, 90, 56, 53];
let avg = 0;

arr.forEach((num) => {
    avg += num;
});
avg /=arr.length
console.log("Average is: " + avg);
