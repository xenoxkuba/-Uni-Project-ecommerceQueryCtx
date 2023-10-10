// ProductDetail.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import HeaderAIPanel from "./HeaderAIPanel";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const isItAIPanel = false;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(
          `https://fakestoreapi.com/products/${productId}`
        );
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProduct();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 gap-6 py-4  bg-gradient-to-br from-black   via-lime-900 to-green-900 min-h-screen">
      <div className="max-w-4xl mx-auto mt-8 pt-5">
        <HeaderAIPanel isItAIPanel={isItAIPanel} />
        <div className="bg-green-50 p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-semibold text-green-800 mb-4">
            {product.title}
          </h1>
          <img
            src={product.image}
            alt={product.title}
            className="w-full mb-4 rounded"
            style={{ maxWidth: "300px", maxHeight: "300px" }}
          />
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-xl font-semibold mb-4 text-green-800">
            Price: {product.price} PLN
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
