import React from 'react';

import './expensecheck.css'

import TaskOne from '../expensess/task1';

const ExpenseChecks = (props) =>{
    if(props.items.length === 0){
          return <h2 className='expenses-list__fallback'>you not have items</h2>
    }
    return (
        <ul className='expenses-list'>
            {props.items.map(itemsd => 
            <TaskOne 
            key={itemsd.id}
            title={itemsd.title} 
            amount={itemsd.amount} 
            date={itemsd.date}/>
            )}
        </ul>
    )
}

export default ExpenseChecks;