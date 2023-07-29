import classes from './checkout.module.css';
import { useRef,useState} from 'react';

const isEmpty=value=>value.trim()!=='';
const isFiveChars=value=>value.trim().length===5;
const Checkout = (props) => {

  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName=nameInputRef.current.value;
    const enteredStreet=streetInputRef.current.value;
    const enteredCity=cityInputRef.current.value;
    const enteredPostal=postalInputRef.current.value;
    const enteredNameIsValid=isEmpty(enteredName);
    const enteredCityIsValid=isEmpty(enteredCity);
    const enteredSteetIsValid=isEmpty(enteredStreet);
    const enteredPostalIsValid=isFiveChars(enteredPostal);
    const isFormValid=enteredCityIsValid&&enteredNameIsValid&&enteredPostalIsValid&&enteredSteetIsValid;
    setFormValidity({
        name:enteredNameIsValid,
        city:enteredCityIsValid,
        postal:enteredPostalIsValid,
        street:enteredSteetIsValid
    })
    if(!isFormValid){
        return;
    }
    props.onConfirm({
        name:enteredName,
        city:enteredCity,
        street:enteredStreet,
        postal:enteredPostal
    })
  };
  const [formValidity,setFormValidity]=useState({
    name:true,
    city:true,
    street:true,
    postal:true
  })
  const nameInputRef=useRef();
  const streetInputRef=useRef();
  const postalInputRef=useRef();
  const cityInputRef=useRef();


  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameInputRef}/>
        {!formValidity.name&&<p>Enter Valid name</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={streetInputRef}/>
        {!formValidity.street&&<p>Enter Valid street</p>}

      </div>
      <div className={classes.control}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' ref={postalInputRef}/>
        {!formValidity.postal&&<p>Enter Valid postal</p>}

      </div>
      <div className={classes.control}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={cityInputRef}/>
        {!formValidity.city&&<p>Enter Valid city</p>}

      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit} >Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;