const lib = require("./parsing");

function merge(left, right, sort_data) {
  let sortedArr = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
    sort_data.number_of_comparison += 1;
  }

  return [...sortedArr, ...left, ...right];
}

function mergeSort(number_array, sort_data)
{
  const half = number_array.length / 2;

  if (number_array.length <= 1) {
    return number_array;
  }

  const left = number_array.splice(0, half);
  const right = number_array;
  return merge(mergeSort(left, sort_data), mergeSort(right, sort_data), sort_data)
}

class SortData{
  constructor(number_of_comparison = 0){
    this.number_of_comparison = number_of_comparison;
  }
}

function start()
{
  let numberArray = lib.parsingFile();
  if(numberArray === null)
    return;
  sort_data = new SortData();
  console.log("Original Array of Numbers");
  console.log(numberArray);
  let sortedArray = mergeSort(numberArray, sort_data);
  console.log("Sorted Array of Numbers");
  console.log(sortedArray);
  console.log("Number of comparisons");
  console.log(sort_data.number_of_comparison);
}

start();



