const lib = require("./parsing");

class SortData{
  constructor(number_of_comparison = 0){
    this.number_of_comparison = number_of_comparison;
  }
}

function ex01(numberArray, k, sort_data)
{
  let i = 0;
  while (i < numberArray.length)
  {
    let j = 0;
    while(j < numberArray.length)
    {
      if((i !== j) && (numberArray[i] + numberArray[j] === k))
        return (true);
      j++;
      sort_data.number_of_comparison++;
    }
    i++;
    
  }
  return (false)

}

function start()
{
  let numberArray = lib.parsingFile();
  if(numberArray === null)
    return;
  sort_data = new SortData();
  console.log("Original Array of Numbers");
  console.log(numberArray);
  const k = parseInt(process.argv[3], 10);
  if (isNaN(k))
  {
    console.log("Please use a number in last parameter")
    return;
  }
  let isPossible = ex01(numberArray, k, sort_data);
  console.log("There is a sum of number equal to k");
  console.log(isPossible);
  console.log("Number of comparisons");
  console.log(sort_data.number_of_comparison);
}

start();