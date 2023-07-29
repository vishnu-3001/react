import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import { useState } from "react";
import CartProvider from "./Components/Store/cartProvider";
function App() {
  const[cartIsShown,setCartIsShown]=useState(false)
  const ShowCartHandler=()=>{
    setCartIsShown(true);
  }
  const HideCartHandler =()=>{
    setCartIsShown(false)
  }
  return (
    <CartProvider>
<div>
      {cartIsShown&&<Cart onCloseCart={HideCartHandler}></Cart>}
      <Header onShowCart={ShowCartHandler}></Header>
      <Meals></Meals>
    </div>
    </CartProvider>
    
  );
}

export default App;
