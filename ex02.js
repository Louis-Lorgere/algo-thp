const lib = require("./parsing");

class SortData{
  constructor(number_of_comparison = 0){
    this.number_of_comparison = number_of_comparison;
  }
}

function ex02(numberArray, sort_data)
{
  let i = 0;
  let count = 0;
  while (i < numberArray.length)
  {
    let j = i + 1;
    while(j < numberArray.length)
    {
      sort_data.number_of_comparison++;
      if(numberArray[i] <= numberArray[j])
      {
        break;
      }
      j++;
    }
    if (j === numberArray.length)
      count++;
    i++;
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
  let count = ex02(numberArray, sort_data);
  console.log("Number of building with a view to the west");
  console.log(count);
  console.log("Number of comparisons");
  console.log(sort_data.number_of_comparison);
}

start();