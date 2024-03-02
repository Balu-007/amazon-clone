import React from 'react';
import CurrencyFormat from 'react-currency-format';
import '../css/Subtotal.css';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from '../reducer';
import { useNavigate } from 'react-router-dom';

function Subtotal() {
    const [{user, basket}, dispatch] = useStateValue();
    const navigate = useNavigate();
    // console.log(getBasketTotal(basket));
  return (
    <div className='subtotal'>
        <CurrencyFormat 
            renderText={(value) => (
                <>
                    <p>
                        Subtotal ({basket.length} items): <strong>{value}</strong>
                    </p>
                    <small className="subtotal__gift">
                        <input type='checkbox' />
                        This order contains a gift
                    </small>
                </>
            )}  
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
        />
        <button className='subtotal__proceedToCheckout' 
            onClick={e => basket.length>0 && user? navigate("/payment"): alert('Make sure to sign in and add Products to the Basket if didn\'t')}>
            Proceed To Checkout
        </button>
    </div>
  )
}

export default Subtotal;