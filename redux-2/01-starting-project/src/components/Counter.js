import { useDispatch, useSelector,connect } from 'react-redux';
import { Component } from 'react';
import { counterActions } from '../store/counter';

import classes from './Counter.module.css';

const Counter = () => {
  const dispatch=useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const showCounter=useSelector(state=>state.counter.showCounter)
  const incrementHandler=()=>{
    dispatch(counterActions.increment())
  }
  const decrementHandler=()=>{
    dispatch(counterActions.decrement())
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter&&<div className={classes.value}>{counter}</div>}
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

// class Counter extends Component{
//   incrementHandler(){
//     this.props.increment()
//   }
//   decrementHandler(){
//     this.props.decrement()
//   }
//   toggleCounterHandler(){}
//   render(){
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//         <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     ); 
//   }
// }
// const mapStateToProps=state=>{
//   return{
//     counter:state.counter
//   }
// }

// const mapDispatchToProps=dispatch=>{
//   return{
//     increment:()=>dispatch({type:'increment'}),
//     decrement:()=>dispatch({type:'decrement'})
//   }
// }
// export default connect(mapStateToProps,mapDispatchToProps)(Counter)

export default Counter;