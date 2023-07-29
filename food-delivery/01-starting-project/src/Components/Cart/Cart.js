import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import { useContext } from 'react';
import CartContext from '../Store/cartContent';
import CartItem from './CartItem';
const Cart=(props)=>{
    const ctx=useContext(CartContext);
    const removeItemHandler=(id)=>{}
    const addItemHandler=(item)=>{};
    const cartItems=<ul className={classes['cart-items']}>
        {ctx.items.map((item)=>{
        return(<CartItem key={item.id} name={item.name} summary={item.description} price={item.price} amount={item.amount} onRemove={removeItemHandler.bind(null,item.id)} onAdd={addItemHandler.bind(null,item)}></CartItem>)
    })}
    </ul>
    return(
        <Modal onClose={props.onCloseCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{ctx.totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onCloseCart}> Close </button>
                <button>Order</button>
            </div>
        </Modal>
    )
}
export default Cart