import React from 'react';
import Cart from '../Cart/Cart';
import Shop from '../Shop/Shop';
import './Body.css'

const getCartItem = (text='', num=0)=>{
    console.log(text, num);
}
const Body = () => {
    return (
        <div className='cart'>
            <Shop getCartItem={getCartItem}></Shop>
            <Cart></Cart>
        </div>
    );
};

export default Body;