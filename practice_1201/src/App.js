import './App.css';
import { useState } from 'react';

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



function App () {
    
    const [val, setVal] = useState ("");
    const [numList, setNumList] = useState([]);   

    const clickHandler =() => {
        let result = zeroBeforeNumbers (val);
        setNumList (result)
    }

    return (
        <div className="app-conatiner">
            <div className="container">                
                <input type="number" placeholder="Enter your number" value={val} onChange={(e) => setVal(e.target.value)} />
                <button onClick={ clickHandler } >Submit</button>                              
            </div>
                <p>{ numList.map(numItem => (
                    <p>{ numItem }</p>)
                )}
                </p>
        </div>
    );
  
};

export default App;


