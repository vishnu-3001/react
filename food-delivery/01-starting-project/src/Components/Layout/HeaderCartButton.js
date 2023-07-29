import classes from './HeaderCartButton.module.css';
import CartIcon from '../Assets/CartIcon';
import { useContext} from "react";
import CartContext from "../Store/cartContent";

const HeaderCartButton=(props)=>{
    
    const cartCtx= useContext(CartContext);
    const cartItems=cartCtx.items.reduce((curNumber,item)=>{
        return(
            curNumber+=item.amount
        )
    },0)
    return (
        <button className={classes.button} onClick={props.onShowCart}>
            <span className={classes.icon}>
                <CartIcon></CartIcon>
            </span>
            <span> Your Cart </span>
            <span className={classes.badge}>
                {cartItems}
            </span>
        </button>
    )
}
export default HeaderCartButton;