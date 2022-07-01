import React, {useState } from 'react';
 
import ExpenseTask from './task/expensess/expenses';

import NewExpense from './task/Newexpensess/NewExpensess';

const DUMM_EXP = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [dynamicexpenses,funcdynamic] = useState(DUMM_EXP);

        const addexpensehand = (expenseret) =>{
           funcdynamic((privdata) =>{
              return([expenseret,...privdata]);
           })
           console.log(dynamicexpenses);
        }
  return (
    <div className="App">
      <NewExpense onaddexpance={addexpensehand}/>
      <ExpenseTask items={dynamicexpenses}/>
    </div>
  );
}

export default App;
