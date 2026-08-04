//Count the number of even and odd elements.

let arr = [10, 25, 82, 50, 90, 25, 56, 56, 53];

const {even, odd} = arr.reduce((count, num) => {
    (num%2) ? count.odd++ : count.even++;
    return count;
}, {even:0, odd:0})

console.log("The even count: " + even + "\nThe odd count: " + odd)
