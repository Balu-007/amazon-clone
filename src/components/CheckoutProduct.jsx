import React from 'react';
import '../css/CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({id, title, image, price, rating}) {
    const [{basket}, dispatch] = useStateValue();
    const removeFromBasket = () =>{
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
    }
  return (
    <div className='checkoutProduct'>
        <img className='checkoutProduct__iamge' src={image} />
        <div className="checkoutProduct__info">
            <p className="checkoutProduct__title">{title}</p>
            <p className="checkoutProduct__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="chekoutProduct__rating">
                {Array(rating)
                    .fill()
                    .map((_, i) =>(
                    <p key={i}>⭐</p>
                ))}
            </div>
            <button onClick={removeFromBasket}>Remove From Basket</button>
        </div>
    </div>
  )
}

export default CheckoutProduct