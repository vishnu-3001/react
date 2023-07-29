import React, { useState } from 'react';

import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import './Expenses.css';
import './ExpensesFilter'
import ExpensesFilter from './ExpensesFilter';
import ExpnsesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filteredyear,setFileredyear]=useState('2022')
  const filterChangeHandler=(selectedYear)=>{
    setFileredyear(selectedYear)
  }
  const filteredExpenses=props.items.filter((expense)=>{
    return expense.date.getFullYear().toString()===filteredyear
  })
  return (
    <Card className="expenses">
      <ExpensesFilter onChangeFilter={filterChangeHandler} selected={filteredyear}></ExpensesFilter>
      <ExpnsesChart expenses={filteredExpenses}></ExpnsesChart>
      <ExpensesList filteredExpenses={filteredExpenses}></ExpensesList>
    </Card>
  );
  }

export default Expenses;