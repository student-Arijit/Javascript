// Find the second smallest element.

let arr = [10, 25, 82, 50, 90, 25, 56, 56, 53];

const {smallest, secondSmallest} = arr.reduce((count, num) => {
    if (num < count.smallest) {
        count.secondSmallest = count.smallest;
        count.smallest = num;
    } else if (num > count.smallest && num < count.secondSmallest) {
        count.secondSmallest = num;
    }
    return count;
}, {smallest:Infinity, secondSmallest:Infinity});

console.log(secondSmallest)
