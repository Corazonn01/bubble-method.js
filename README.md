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

const testData = [0, -1, 4, 5, 2, -3];
const average = testData.reduce((a, b) => a + b, 0) / testData.length;

console.log(testData);  // [ 0, -1, 4, 5, 2, -3 ]
bubbleSort(testData);   // вызываем функцию сортировки
console.log(testData);  // [ -3, -1, 0, 2, 4, 5 ]
console.log(Math.min(...testData));
console.log(Math.max(...testData));
console.log(average);
