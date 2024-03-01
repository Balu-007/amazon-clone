import React from 'react';
import '../css/Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <img className='home__image' src='https://amazon-clone-with-stripe-payment.netlify.app/images/banner.jpg' alt='Amazon Prime Banner' />

            <div className="home__row">
              <Product 
              id="43215"
              title="The Lean Start up"
              price={29.99}
              image='https://images-eu.ssl-images-amazon.com/images/I/81vvgZqCskL._AC_UL210_SR210,210_.jpg'
              rating={5} 
              />

              <Product 
              id="90546"
              title="Mini Food Chopper with Stainless Steel Blades, Chop, Dice, and Mince Vegetables, Nuts, Spices, and Herbs, Multipurpose Food Grinder Labeled CHOP in Black"
              price={59.99}
              image='https://m.media-amazon.com/images/I/81Swbbfvd4L._AC_SX679_.jpg'
              rating={4}
              />
            </div>

            <div className="home__row">
              <Product 
                id="83456"
                title="Fitbit Inspire 2 Health & Fitness Tracker with a Free 1-Year Fitbit Premium Trial, 24/7 Heart Rate, Black/Black, One Size (S & L Bands Included)"
                price={62}
                image='https://m.media-amazon.com/images/I/71wPLzgLNYL._AC_SX679_.jpg'
                rating={4}
              />
              <Product 
                id="98765"
                title="Echo Show 10 (3rd Gen) | Charcoal with Echo Sub"
                price={379.28}
                image='https://m.media-amazon.com/images/I/81ynP6XeSPL._AC_SX679_.jpg'
                rating={5}
              />
              <Product 
                id="45678"
                title="Apple iPad Air (5th Generation): with M1 chip, 10.9-inch Liquid Retina Display, 64GB, Wi-Fi 6, 12MP front/12MP Back Camera, All-Day Battery Life – Blue"
                price={413.99}
                image='https://m.media-amazon.com/images/I/71VbHaAqbML._AC_SX522_.jpg'
                rating={5}
              />
            </div>

            <div className="home__row">
              <Product 
                id="1234"
                title="Samsung LS49AG952NNXZA 49 32:9 Ultrawide Curved Adaptive-Sync 240 Hz HDR VA Gaming Monitor"
                price={3688.00}
                image='https://www.tanotis.com/cdn/shop/products/1623763948_IMG_1551338_600x.jpg?v=1650503560'
                rating={3}
              />
            </div>
        </div>
    </div>
  )
}

export default Home