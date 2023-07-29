import CartContext from "./cartContent";
import { useReducer } from "react";
const defaultCart={
    items:[],
    total:0
}
const cartReducer=(state,action)=>{
    if(action.type==='ADD'){
        const updatedAmount=state.total+action.item.amount*action.item.price;
        const existingItem=state.items.findIndex(item=>item.id===action.item.id);
        console.log(existingItem);
        if(existingItem>0){
            const updatedItems=state.items;
            updatedItems[existingItem].amount+=1;
            return(
                {items:updatedItems,total:updatedAmount}
            )
        }
        else{
            const updatedItems=state.items.concat(action.item);
            return(
                {items:updatedItems,total:updatedAmount}
            )
        }
    }
    if(action.type==='REMOVE'){}
    return defaultCart
}
const CartProvider=(props)=>{
    const [cartState,dispatchCartAction]=useReducer(cartReducer,defaultCart)
    const addItemHandler=(item)=>{
        dispatchCartAction({type:'ADD',item:item})
    };
    const removeItemHandler=(id)=>{
        dispatchCartAction({type:'REMOVE',id:id})
    };
    const cartContext={
        items:cartState.items,
        totalAmount:cartState.total,
        addItem:addItemHandler,
        removeItem:removeItemHandler
    }
    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}
export default CartProvider