// Check if an array is sorted descending.

let arr = [10, 25, 82, 50, 90, 25, 56, 56, 53];

try {
    arr.reduce((acc, curr) => {
        if (acc > curr) throw new Error("Array is not sorted in descending order.");
        return curr;
    }, Infinity)
} catch (err) {
    console.log(err.message);
}
