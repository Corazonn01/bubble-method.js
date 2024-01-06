const prompt = require('prompt-sync')({ sigint: true });

const bubbleSort = (arr) => {
    try {
        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = 0; j < arr.length - i - 1; j++) {
                if (parseFloat(arr[j]) > parseFloat(arr[j + 1])) {
                    let tmp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = tmp;
                }
            }
        }
        return arr;
    } catch (error) {
        console.error("Error during sorting:", error.message);
        throw error; // rethrow the error to exit the program
    }
};

try {
    const n = prompt("Enter the number of elements in the array: ");
    const userArray = [];

    for (let i = 0; i < n; i++) {
        const element = prompt(`Enter element ${i + 1}: `);
        userArray.push(element);
    }

    const sortedArray = bubbleSort(userArray);
    console.log("Sorted array:", sortedArray);
} catch (error) {
    console.error("Error:", error.message);
}
