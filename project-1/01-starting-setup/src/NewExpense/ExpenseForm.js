import './ExpenseForm.css'
import { useState } from 'react'
function ExpenseForm(props){
    const [enteredTitle,setEnteredTitle]=useState('')
    const [enterdAmount,setEnteredMAount]=useState('');
    const [enteredDate,setEnteredDate]=useState('');
    const titleChangeHansler=(event)=>{
        setEnteredTitle(event.target.value);
    }
    const amountChangeHandler=(event)=>{
        setEnteredMAount(event.target.value);
    }
    const dateChangeHandler=(event)=>{
        setEnteredDate(event.target.value);
    }
    const submitHandler=(event)=>{
        event.preventDefault();
        const expenseData={
            title:enteredTitle,
            amount:+enterdAmount,
            date:new Date(enteredDate),
        }
        setEnteredDate('');
        setEnteredMAount('');
        setEnteredTitle('');
        props.onSaveExpenseData(expenseData)
    }
    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHansler} value={enteredTitle}></input>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler} value={enterdAmount}></input>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2023-12-31' onChange={dateChangeHandler} value={enteredDate}></input>
                </div>
            </div>
            <div className='new-expense__action'>
                <button type='submit'>Add expense</button>
            </div>
        </form>
    )
}
export default ExpenseForm