import React, { useState } from "react";
import "./Shop.css";
const Shop = ({getCartItem}) => {
const [text, setText]= useState('');
  return (
    <div>
      <input type="text" id="text-field" value={text.value} onChange={e=>setText(e.target.value)}/>
      {
      }
      <input type="number" value={text}/>
      <button onClick={() => getCartItem(1, 1)}>Store</button>
    </div>
  );
};

export default Shop;
