import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';
import React from 'react';
import { useRef } from 'react';
const MealItemForm=(props)=>{
    const amountRef=useRef()
    const submitHandler=(event)=>{
        event.preventDefault();
        const enteredValue=+amountRef.current.value;
        props.onAddToCart(enteredValue);
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
            ref={amountRef}
             label="Amount" input={{
                id:`'amount_'${props.id}`,
                type:'number',
                min:1,
                max:5,
                step:1,
                defaultValue:1
            }}></Input>
            <button> ADD </button>
        </form>
    )
}
export default React.memo(MealItemForm)