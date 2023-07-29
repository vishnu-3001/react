function ResultTable(props){
    return(
        <div>
            <table className="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
            {props.yearlyData.map((yearData)=>{
                return(
                          <tr key={yearData.year}>
                          <td>{yearData.year}</td>
                          <td>{yearData.savingsEndOfYear}</td>
                          <td>{yearData.yearlyInterest}</td>
                        </tr>
                )
            })}
        </tbody>
      </table>
        </div>
    )
}
export default ResultTable