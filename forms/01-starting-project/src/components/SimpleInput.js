import { useState } from "react";
const SimpleInput = (props) => {
  const [enteredName,setEnterdName]=useState('');
  const[touched,setTouched]=useState(false);
  const enteredNameIsValid=enteredName.trim()!=='';
  const nameIsValid=enteredNameIsValid&&touched
  const nameInputChangeHandler=(event)=>{
    setTouched(true);
    setEnterdName(event.target.value);
  }
 const nameInputBlurHandler=(event)=>{
    setTouched(true);
  }
  const formSubmitHandler=event=>{
    event.preventDefault();
    setTouched(true);
    if(!enteredNameIsValid){
      return;
    }
    setEnterdName('');
    setTouched(false);
  }
  const nameEnteredClasses=nameIsValid?'form-control':'form-control invalid'
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameEnteredClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameInputChangeHandler} 
        onBlur={nameInputBlurHandler}
        />
      </div>
      {!enteredNameIsValid&&<p className="error-text">Please enter a valid name</p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
