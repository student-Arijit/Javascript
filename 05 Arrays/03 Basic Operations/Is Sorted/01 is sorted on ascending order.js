// Check if an array is sorted ascending.

let arr = [10, 25, 82, 50, 90, 25, 56, 56, 53];

try {
    arr.reduce((acc, curr) => {
        if (acc < curr) throw new Error("Array is not sorted in ascending order.");
        return curr;
    }, 0)
} catch (err) {
    console.log(err.message);
}
