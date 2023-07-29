import { useState } from "react";
function UserInput(props){
    const[currentSavings,setCurrentSavings]=useState('');   
    const[yearlyContribution,setYearlyContribution]=useState('');
    const[duration,setDuration]=useState('');
    const[expectedReturn,setExpectedReturn]=useState('');

    const submitHandler=(event)=>{
        event.preventDefault();
        const userInputValue={
            'current-savings':currentSavings,
            'yearly-contribution':yearlyContribution,
            'duration':duration,
            'expected-return':expectedReturn
        }
        props.submitHandler(userInputValue)
    }
    const resetHandler=()=>{
        setCurrentSavings('');
        setDuration('');
        setExpectedReturn('');
        setYearlyContribution('');
    }
    const inputChangeHandler=(input,value)=>{
        if(input==='current-savings'){
            setCurrentSavings(+value);
        }
        if(input==='yearly-contribution'){
            setYearlyContribution(+value);
        }
        if(input==='duration'){
            setDuration(+value);
        }
        if(input==='expected-return'){
            setExpectedReturn(+value);
        }
    }
    return (<div>
        <form className="form" onSubmit={submitHandler}>
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input type="number" id="current-savings" value={currentSavings} onChange={(event)=>{inputChangeHandler('current-savings',event.target.value)}} />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input type="number" id="yearly-contribution" value={yearlyContribution} onChange={(event)=>{inputChangeHandler('yearly-contribution',event.target.value)}} />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input type="number" id="expected-return" value={expectedReturn} onChange={(event)=>{inputChangeHandler('expected-return',event.target.value)}} />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" id="duration" value={duration} onChange={(event)=>{inputChangeHandler('duration',event.target.value)}} />
          </p>
        </div>
        <p className="actions">
          <button onClick={resetHandler} type="reset" className="buttonAlt">
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
    </div>)
}
export default UserInput