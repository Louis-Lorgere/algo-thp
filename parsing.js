function parsingFile()
{
  const fs = require('fs');
  const fileName = process.argv[2];

  function isNum(val){
    return !isNaN(val)
  }

  function numberCheck(number_array)
  {
    for (let i = 0; i < number_array.length; i++) {
      if (isNum(number_array[i]) === false)
      {
        return(false);
      }
      return (true);
    }
  }

  let number_array;

  try
  {
    const data = fs.readFileSync(fileName, 'utf8');
    number_array = data.slice().split(" ");
  } 

  catch (error)
  {
    console.error(error.message);
    return;
  }

  if(numberCheck(number_array) === false)
  {
    console.log("There is something wrong with the number list")
    return null;
  }
  const final_array = number_array.map(Number);
  return final_array;
}

module.exports = { parsingFile };