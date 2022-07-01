import React,{useState} from "react";

import './ExpensessForm.css';

const ExpenseForm = (props) =>{

    const [titlenewchange,settitlenewchange] = useState('');

    const [amountnewchange,setamountnewchange] = useState('');

    const [datenewchange,setdatenewchange] = useState('');

    // const [userinput,Setuserinput] = useState({
    //     titlenewchange:'',
    //     amountnewchange:'',
    //     datenewchange:'',
    // })

    const titleHandler = event =>{
        settitlenewchange(event.target.value);
        // Setuserinput({
        //     ...userinput,
        //     amountnewchange:event.target.value
        // })
        // Setuserinput((preveuser) =>{
        //     return{...preveuser,amountnewchange:event.target.value};
        // })
    }
    const amountHandler = event =>{
        setamountnewchange(event.target.value);

        // Setuserinput({
        //     ...userinput,
        //     titlenewchange:event.target.value
        // })    
     }
     const dateHandler = event =>{
        setdatenewchange(event.target.value);

        // Setuserinput({
        //     ...userinput,
        //     datenewchange:event.target.value
        // })     
    }
       const submithander = event => {
         event.preventDefault();
         const expenseData = {
             title:titlenewchange,
             amount:amountnewchange,
             date:new Date(datenewchange)
         } 
         props.onsavedata(expenseData);
         settitlenewchange('');
         setamountnewchange('');
         setdatenewchange('');

       }
     

    return (<form onSubmit={submithander}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>title</label>
                <input type="text" value={titlenewchange} onChange={titleHandler}></input>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" value={amountnewchange} min="0.01" step="0.01" onChange={amountHandler}></input>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" value={datenewchange}min="2022-1-1" max="2022-12-31" onChange={dateHandler}></input>
            </div>
        </div>
        <div className="new-expense__actions" >
            <button type="button" onClick={props.oncancel}>Cancel</button>
            <button type="submit">Add Expense</button>
        </div>
    </form>
    )
};

export default ExpenseForm;