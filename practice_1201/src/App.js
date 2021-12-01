import './App.css';


function zeroBeforeNumbers (num) {
    
  let result = [];

  if (num < 1) {
      return
  }
  
  let numLength = num.toString().length;
  //console.log(numLength);

  let nulls = "0".repeat(numLength);
  //console.log(nulls);

  for(let i=1; i <= num; i++) 
  {
      let strNumbersItem = i.toString();
      if (strNumbersItem.length < numLength)
      {
          strNumbersItem = nulls.concat(strNumbersItem).substr(-numLength, numLength);
      }   
     result[i-1] = strNumbersItem;
  }
  return result;
}
// result = zeroBeforeNumbers (12);
// console.log(result);
////////////////////////////////////////////



function zeroBeforeNumbers2(num) {  
  
    let result2 = [];
    let numLength = num.toString().length;
    console.log(numLength);
    let nulls = "0".repeat(numLength);
    //console.log(nulls);


    const strNumbersItem = num.map((numItem) => 
        <li key={numItem.toString()}
            { num < 0 && strNumbersItem.length < numLength ? strNumbersItem = nulls.concat(strNumbersItem).substr(-numLength, numLength) : [] } >
        </li>
    );
  
    result2[i-1] = strNumbersItem;
  
    return (
        <div className="container">{ strNumbersItem }</div>
    );
}

// result2 = zeroBeforeNumbers2 (12);
// console.log(result2);

export default App;


