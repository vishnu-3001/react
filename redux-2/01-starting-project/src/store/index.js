import { createStore } from 'redux';
import { createSlice,configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter';
import AuthReducer from './Auth';

// const counterReducer = (state = { counter: 0,showCounter:true }, action) => {
//   if (action.type === 'increment') {
//     return {
//       counter: state.counter + 1,
//       showCounter:state.showCounter
//     };
//   }

//   if (action.type === 'decrement') {
//     return {
//       counter: state.counter - 1,
//       showCounter:state.showCounter
//     };
//   }
//   if(action.type==='toggle'){
//     return{
//         counter:state.counter,
//         showCounter:!state.showCounter
//     }
//   }

//   return state;
// };

// const store = createStore(counterReducer);
const store=configureStore({
    reducer:{counter:counterReducer,auth:AuthReducer}
})



export default store;