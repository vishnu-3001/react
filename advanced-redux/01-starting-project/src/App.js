import { useSelector,useDispatch } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useEffect,Fragment } from 'react';
import { uiActions } from './store/ui-slice';
import Notification from './components/UI/Notification';
import { sendCartData } from './store/cart-slice';
function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart=useSelector((state)=>state.cart);
  const notification=useSelector(state=>state.ui.Notification);
  const dispatch=useDispatch();
  let isInitial=true;
  useEffect(()=>{
    dispatch(sendCartData);
  },[cart,dispatch])

  return (
    <Fragment>
      {notification&&<Notification status={notification.status} title={notification.title} message={notification.message}></Notification>}
      <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
    </Fragment>
  );
}

export default App;