import React from "react";

import Chart from '../Chart/Chart';

const ExpenseChart = (props) =>{
    const ChartDataPoint = [
        {lapel:'jan', value:0},
        {lapel:'feb', value:0},
        {lapel:'mar', value:0},
        {lapel:'apr', value:0},
        {lapel:'may', value:0},
        {lapel:'jun', value:0},
        {lapel:'jul', value:0},
        {lapel:'aug', value:0},
        {lapel:'sep', value:0},
        {lapel:'oct', value:0},
        {lapel:'nov', value:0},
        {lapel:'dec', value:0},
    ];
    for(const expense of props.expensesesdatavalue){
        const expensemonth = expense.date.getMonth();
        ChartDataPoint[expensemonth].value += expense.amount;
    }
    return <Chart datapoints={ChartDataPoint}/>
};

export default ExpenseChart; 