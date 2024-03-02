import React from 'react';
import '../css/Product.css';
import {useStateValue} from './StateProvider';

function Product({id, title, image, price, rating}) {
  const [{user, basket}, dispatch] = useStateValue();
  // const [{basket}, dispatch] = useContext(StateContext);
  // console.log(basket);
  const addToBasket = () => {
    //dispatch the item in to data layer
    {!user? alert('Please Sign in to proceed'): 
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating
      }
    })}
    // dispatch({
    //   type: 'ADD_TO_BASKET',
    //   item: {
    //     id: id,
    //     title: title,
    //     image: image,
    //     price: price,
    //     rating: rating
    //   }
    // })
  }
  return (
    <div className='product'>
        <div className="product__info">
          <p>{title}</p>
          <p className='product__price'>
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="product__rating">
            {Array(rating)
                .fill()
                .map((_, i) =>(
                  <p key={i}>⭐</p>
                ))}
          </div>
        </div>
        <img src={image} alt='' />
        <button className='product__addToBasket' onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}

export default Product;