import React, { useState } from "react";
import "./Shop.css";
const Shop = ({ getCartItem }) => {
  const [text, setText] = useState("");
  const [num, setNum] = useState(0);
  return (
    <div>
      <input
        type="text"
        id="text-field"
        value={text.value}
        onChange={(e) => setText(e.target.value)}
      />
      <input type="number" value={num} onChange={e=>setNum(e.target.value)}/>
      <button onClick={() => getCartItem(text, num)}>Store</button>
    </div>
  );
};

export default Shop;
