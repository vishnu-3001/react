import { createSlice } from '@reduxjs/toolkit';
import { uiActions } from './ui-slice';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter(item => item.id !== id);
      } else {
        existingItem.quantity--;
      }
    },
  },
});

export const sendCartData=(cartData)=>{
    console.log('hello');
    return async (dispatch)=>{
        dispatch(uiActions.showNotification({
            status:'pending',
            title:'Sending',
            message:'sending cart data !'
          }))
          const sendRequest=async ()=>{
            console.log('hi');
            const response=await fetch('https://react-food-app-12590-default-rtdb.firebaseio.com/cart.json',{method:'PUT',body:JSON.stringify(cartData)})
            if(!response.ok){
                throw new Error('something went wrong');
          }
          }
          try{
            await sendRequest()
          }
          catch(error){
            dispatch(uiActions.showNotification({
                status:'error',
                title:'Error',
                message:'Error occured while updating'
              }))
          }
    }
}

export const cartActions = cartSlice.actions;

export default cartSlice;