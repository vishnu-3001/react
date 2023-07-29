import HeaderComponent from "./Components/Header";
import UserInput from "./Components/UserInput";
import ResultTable from "./Components/ResultsTable";
import { useState } from "react";

function App() {
  const [yearlyDatafinal,setYearlyData]=useState(null)
  const calculateHandler = (userInputValue) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    let currentSavings = +userInputValue['current-savings']; // feel free to change the shape of this input object!
    const yearlyContribution = +userInputValue['yearly-contribution']; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInputValue['expected-return'] / 100;
    const duration = +userInputValue['duration'];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    // do something with yearlyData ...
    setYearlyData(yearlyData);
  };

  return (
    <div>
      <HeaderComponent></HeaderComponent>
      <UserInput submitHandler={calculateHandler}></UserInput>
      {yearlyDatafinal&&<ResultTable yearlyData={yearlyDatafinal}></ResultTable>}

      

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      
    </div>
  );
}

export default App;
