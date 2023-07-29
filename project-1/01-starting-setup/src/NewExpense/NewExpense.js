import React from "react"
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm"
function NewExpense(props){
    const onSaveExpenseDataHandler=(enteredExpenseData)=>{
        const expeseData={...enteredExpenseData,id:Math.random().toString()};
        props.onNewExpense(expeseData);
    }
    return(
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
        </div>
    )
}
export default NewExpense