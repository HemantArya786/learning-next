"use client";

import axios from "axios";
import { useEffect, useState } from "react";

const SprecialProductList = () => {
  const [selectedProduct, SetSelectedProduct] = useState();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => SetSelectedProduct(res.data))
      .catch((err) => console.log(err));
  }, []);

  let productId = 1;

  console.log(selectedProduct);

  const { title, image, price, rating, description, category } =
    selectedProduct;
  return (
    <div>
      <div>
        <p>this single product list</p>
      </div>
      <div>
        <div>
          <img src={image} alt="" />
        </div>
        <p>title : {title}</p>
        <p>description : {description}</p>
        <p>Price : {price}</p>
        <p> Rating : {rating}</p>
      </div>
    </div>
  );
};

export default SprecialProductList;
