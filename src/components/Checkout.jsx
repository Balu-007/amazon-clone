import React from 'react';
import '../css/Checkout.css';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
  const [{basket, user}, dispatch] = useStateValue();
  return (
    <div className='checkout'>
        <div className="checkout__left">
            <img src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_DarkBG_1_NotApproved._TTW_.jpg" alt="" className="checkout__ad" />
            <div>
              <h3>Hello {user?.email}</h3>
              <h1 className="checkout__title">
                  Your Shopping Basket
              </h1>
              {basket.map((item) => (
                <CheckoutProduct 
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}

            </div>
        </div>

        <div className="checkout__right">
            <Subtotal />
        </div>
    </div>
  )
}

export default Checkout