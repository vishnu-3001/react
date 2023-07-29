import { useState } from "react"
const useInput=(validateValue)=>{
    const[enteredValue,setEnteredValue]=useState('');
    const[isTouched,setisTouched]=useState(false);
    const valueIsValid=validateValue(enteredValue);
    const hasError=!valueIsValid&&isTouched;
    const valueChangeHandler=(event)=>{
        setEnteredValue(event.target.value);
    }
    const inputBlurHandler=(event)=>{
        setisTouched(true);
    }
    const reset=()=>{
        setEnteredValue('');
        setisTouched(false);
    }
    return{reset,value:enteredValue,hasError,inputBlurHandler,valueChangeHandler,isValid:valueIsValid}
}
export default useInput