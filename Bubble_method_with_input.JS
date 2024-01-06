
const prompt = require('prompt-sync')({ sigint: true });
const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
    return arr;
}
const n = parseInt(prompt("Enter the number of elements in the array: "));
const userArray = [];
for (let i = 0; i < n; i++) {
    const element = parseInt(prompt(`Enter element ${i + 1}: `), );
    userArray.push(element);
}

const sortedArray = bubbleSort(userArray);
console.log("Sorted array:", sortedArray);

const average = sortedArray.reduce((a, b) => a + b, 0) / sortedArray.length;
console.log(average);
console.log(Math.min(...sortedArray))
console.log(Math.max(...sortedArray))
