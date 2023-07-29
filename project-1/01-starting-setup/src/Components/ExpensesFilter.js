import './ExpensesFilter.css'
function ExpensesFilter(props){
    const dropdownChangeHandler=(event)=>{
        props.onChangeFilter(event.target.value);
    }
    return(
        <div className='expense-filter'>
            <div className='expense-filter__control'>
                <label>Filter by year</label>
                <select onChange={dropdownChangeHandler} value={props.selected}>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2019">2019</option>
                </select>
            </div>
        </div>
    )
}
export default ExpensesFilter