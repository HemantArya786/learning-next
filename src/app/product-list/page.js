"use client";

import axios from "axios";
import { useEffect, useState } from "react";
const ProductList = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProductData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="text-center">
        <h1 className="text-2xl"> this is my products List page</h1>
      </div>
      {productData.map((item) => (
        <div key={item.id} className="flex flex-wrap">
          <div class="max-w-sm bg-white  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div>
              <a href="#">
                <img class="rounded-t-lg" src={item.image} alt="" />
              </a>
            </div>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.title}
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                description : {item.description}
              </p>
              <p class="mb-3 text-2xl font-normal text-gray-700 dark:text-gray-400">
                price : {item.price}
              </p>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Rating : {item.rating.rate}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
