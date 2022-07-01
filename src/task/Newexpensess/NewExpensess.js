import React,{useState} from "react";

import ExpenseForm from "./ExpensessForm";

import './NewExpensess.css';

const NewExpense = (props) =>{
    const [showaddexpense,addexpense] = useState(false);

    const expensehandlerdata = enterdexpnsedata =>{
        const expenseData = {
            id:Math.random().toString(),
          ...enterdexpnsedata,
    };
    props.onaddexpance(expenseData);
}
const StartAddItem = () =>{
    addexpense(true);
}

const cancelAddItem = () =>{
    addexpense(false);
}
    return <div className="new-expense">
        {!showaddexpense &&<button type="button" onClick={StartAddItem}>Add New Items</button>}
        {showaddexpense &&<ExpenseForm onsavedata={expensehandlerdata} oncancel={cancelAddItem}/>}
    </div>
}

export default NewExpense;