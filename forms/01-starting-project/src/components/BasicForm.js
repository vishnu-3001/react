import useInput from "../hooks/use-input";
const BasicForm = (props) => {
  const {reset:nameResetHandler,isValid:enteredNameIsValid,value:enteredName,hasError:nameInputHasError,inputBlurHandler:nameBlurHandler,valueChangeHandler:nameChangeHandler}=useInput(value=>value.trim()!=='');
  const {reset:emalResetHandler,isValid:enteredEmailIsValid,value:enteredEmail,hasError:emailInputHasError,inputBlurHandler:emailBlurHandler,valueChangeHandler:emailChangeHandler}=useInput(value=>value.includes('@'));

  const formSubmissionHandler=()=>{
    nameResetHandler();
    emalResetHandler();
  }
  const nameInputClasses=nameInputHasError?'form-control invalid':'form-control';
  const emailInputClasses=emailInputHasError?'form-control invalid':'form-control';
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='control-group'>
        <div className={nameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' onChange={nameChangeHandler} onBlur={nameBlurHandler} value={enteredName}/>
        </div>
        {/* <div className={nameInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' onChange={nameChangeHandler} onBlur={nameBlurHandler}/>
        </div> */}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name' >E-Mail Address</label>
        <input type='text' id='name' onChange={emailChangeHandler} onBlur={emailBlurHandler} value={enteredEmail}/>
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
