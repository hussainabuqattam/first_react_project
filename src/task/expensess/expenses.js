import React, {useState } from 'react';
import TaskOne from './task1';
import ExpenseChecks from './expensecheck';
import Card from '../UI/card';
import ExpensesFilter from '../Newexpensess/ExpensesFilter';
import ExpenseChart from './expensechart';


const ExpenseTask = ({items}) =>{
    const [filterselect,selectorfilters] = useState('2019')
      const expensefilter = expenses =>{
        selectorfilters(expenses);
      }
      const filterdateyear = items.filter(expense =>{
        return expense.date.getFullYear().toString() === filterselect;
      })

  
      return( 
        <Card className='expenses'>
            <ExpensesFilter selected={filterselect} onchangeselected={expensefilter}/>
            <ExpenseChart expensesesdatavalue={filterdateyear}/>
            <ExpenseChecks items={filterdateyear} />
        </Card>
      );

}

export default ExpenseTask;