const lib = require("./parsing");

class SortData{
  constructor(number_of_comparison = 0){
    this.number_of_comparison = number_of_comparison;
  }
}

function ex04(numberArray, sort_data)
{
  let i = numberArray.length - 2;
  let count = 1;

  let heightMax = numberArray[numberArray.length - 1];
  while (i >= 0)
  {
    sort_data.number_of_comparison++;
    if(numberArray[i] > heightMax)
    {
      heightMax = numberArray[i];
      count++;
    }
    i--;
  }
  return (count)

}

function start()
{
  let numberArray = lib.parsingFile();
  if(numberArray === null)
    return;
  sort_data = new SortData();
  console.log("Original Array of Numbers");
  console.log(numberArray);
  let count = ex04(numberArray, sort_data);
  console.log("Number of building with a view to the west");
  console.log(count);
  console.log("Number of comparisons");
  console.log(sort_data.number_of_comparison);
}

start();