import './Chart.css'
import  ChartBar from'./ChartBar'
const Chart=(props)=>{
    const datapointValues=props.datapoints.map((datapoint)=>datapoint.value);
    const totalMaximum=Math.max(...datapointValues);
    return (
        <div className='chart'>
            {props.datapoints.map((datapoint)=><ChartBar key={datapoint.label} value={datapoint.value} maxvalue={totalMaximum} label={datapoint.label}></ChartBar>)}
        </div>
    )
}
export default Chart

