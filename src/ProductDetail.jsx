// ProductDetail.js
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import HeaderExtra from "./HeaderExtra";
import { CartContext } from "./Store/cart-context";

const ProductDetail = (props) => {
  const [cartCount, setCartCount] = useState(0);
  const [product, setProduct] = useState(null); //do pobierania z api
  const [isFirstItemAdded, setIsFirstItemAdded] = useState(false);
  const { productId } = useParams();
  const { addToCart } = useContext(CartContext);
  const { cartItems } = useContext(CartContext);
  const isItAIPanel = false;

  useEffect(() => {
    if (isFirstItemAdded) {
      console.log(cartItems); // wyświetla aktualny stan koszyka w konsoli
    }
  }, [cartItems, isFirstItemAdded]);

  const handleAddToCart = async (e, product) => {
    // setCartCount((prevCount) => prevCount + 1);
    // props.onHandleAddCartIcon(cartCount + 1);
    const { id, title, price } = product;
    addToCart(id, title, price);
    setIsFirstItemAdded(true);

    try {
      const response = await axios.get(
        `https://ai-assistant-5bd69-default-rtdb.firebaseio.com/clicks/${id}.json`
      );
      const currentClicks = response.data || 0;

      await axios.put(
        `https://ai-assistant-5bd69-default-rtdb.firebaseio.com/clicks/${id}.json`,
        currentClicks + 1
      );
    } catch (error) {
      console.error(
        "Błąd podczas zapisywania kliknięć do bazy danych Firebase:",
        error
      );
    }
  };

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
    <div className="grid grid-cols-1 gap-6 py-5 mt-2  bg-gradient-to-br from-black   via-lime-900 to-green-900 min-h-screen">
      <div className="max-w-4xl mx-auto pt-5 mt-16">
        <HeaderExtra isItAIPanel={isItAIPanel} />
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
          <button
            className="bg-green-800 hover:bg-blue-600 text-white font-bold  px-4 rounded-full h-8 sm:h-10 "
            onClick={(e) => handleAddToCart(e, product)}
          >
            <span className="text-xs sm:text-xl">Add to cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
