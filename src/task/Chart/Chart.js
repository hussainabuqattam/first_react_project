import React from "react";

import ChartBar from "./ChartBar";

import './Chart.css';


const Chart = (props) =>{
  const datapointsvalue = props.datapoints.map(datapoint => datapoint.value);

  const maxdatavalue = Math.max(...datapointsvalue);
    return (<div className="chart">
        {props.datapoints.map((chartmap) => (
        <ChartBar 
        id={chartmap.lapel} 
        value={chartmap.value} 
        maxvalue={maxdatavalue} 
        lapel={chartmap.lapel}/>))}
    </div>
    )
}

export default Chart;