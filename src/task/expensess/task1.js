import React, {useState } from 'react';
import './task1.css'
import DateTask from './taskdate';


const TaskOne = (props) =>{

    return(
      <div className='expense-item'>
         <DateTask date={props.date} />
          <div className='expense-item__description'>
              <h2>{props.title}</h2>
              <div className='expense-item__price'>{props.amount}</div>
          </div>
      </div>    
    );
}

export default TaskOne;