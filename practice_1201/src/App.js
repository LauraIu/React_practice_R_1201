import './App.css';

function App () {

  function ZeroBeforeNumbers(num) {      
    let result = [];

    if (num < 1) {
        return
    }
    
    const numLength = num.toString().length;
    const nulls = "0".repeat(numLength);

    for(let i = 1; i <= num; i++) {
      let strNumbersItem = i.toString();
      if (strNumbersItem.length < numLength) {
        strNumbersItem = nulls.concat(strNumbersItem).substr(-numLength, numLength);
      }   
      result[i - 1] = strNumbersItem;
    }
    return result;
  }

  return (
    <div className="app-container">hello
      <ZeroBeforeNumbers />      
    </div>
  )
}

export default App;


