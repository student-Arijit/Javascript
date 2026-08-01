//Reverse an array in place.
const arr = [10, 25, 82, 50, 90, 56, 53];

for (let i = 0; i < Math.floor(arr.length / 2); i++) {
  [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
}

console.log(arr);
