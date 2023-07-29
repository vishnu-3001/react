import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import { useContext } from 'react';
import CartContext from '../../Store/cartContent';
const MealItem=(props)=>{
    const ctx=useContext(CartContext)
    const addCartHandler=(amount)=>{
        ctx.addItem({id:props.id,amount:amount,name:props.name,price:props.price})
    }
    return(
        <li className={classes.meal} key={props.id}>
            <div>
            <div><h3>{props.name}</h3></div>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>${props.price}</div>
            </div>
            <div><MealItemForm id={props.id} onAddToCart={addCartHandler}></MealItemForm></div>
        </li>
    )
}
export default MealItem