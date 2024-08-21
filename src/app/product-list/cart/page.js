"use client";

import axios from "axios";
import { useEffect, useState } from "react";

function cart() {
  const [cartData, setCartDat] = useState([]);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/carts`)
      .then((res) => setCartDat(res.data))

      .catch((err) => console.log(err));
  }, []);

  let id = 1;
  const filterByUserId = cartData.filter((item) => item.userId === id);

  console.log(filterByUserId);

  return (
    <div>
      <h1>User cart details </h1>

      {filterByUserId.map((item) => (
        <div key={item.id}>
          <p>Date : {Date(item.date)}</p>
          <div>
            {item.products.map((product) => (
              <div key={product.productId}>
                <p>Product Name : {}</p>
                <p> quantity : {product.quantity}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default cart;
