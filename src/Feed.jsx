import React, { useEffect } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { useState, useContext } from "react";
import CartContext from "./Store/cart-context";

const Feed = (props) => {
  const [cartCount, setCartCount] = useState(0);

  const cartCtx = useContext(CartContext);

  const handleAddToCart = (e, price) => {
    setCartCount((prevCount) => prevCount + 1);
    props.onHandleAddCartIcon(cartCount + 1);
    console.log(price);
  };

  const fetchProducts = async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    return data;
  };
  const { isLoading, error, data } = useQuery("products", fetchProducts);

  useEffect(() => {
    fetchProducts();
  }, []);

  if (isLoading) {
    return (
      <div className="animate-bounce pt-10 pb-10 text-center">Loading...</div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 py-8 sm:px-32 px-8 bg-slate-700">
        {data
          .filter((product) =>
            product.title
              .toLowerCase()
              .includes(props.filteredName.toLowerCase().trim())
          )
          .map((product) => (
            <div
              key={product.id}
              className="border rounded-lg overflow-hidden bg-slate-200 flex flex-col content-between  "
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-32 sm:h-64 object-full"
              />
              <div className="p-4  ">
                <h3 className="font-medium text-base sm:text-lg mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-700 font-bold sm:font-normal text-xxs sm:text-xs">
                  {product.description}
                </p>
              </div>
              <div className="grow flex flex-col-reverse">
                <div className="p-1 sm:p-4 ">
                  <p className="text-gray-900 font-bold text-sm sm:text-lg sm:mt-2 pl-2 pb-1 sm:pb-2">
                    {product.price} PLN
                  </p>
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold  px-4 rounded-full mb-2 sm:mb-4 h-8 sm:h-10 "
                    onClick={(e) => handleAddToCart(e, product.price)}
                  >
                    <span className="text-xs sm:text-xl">Add to cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        {data.filter((product) =>
          product.title.toLowerCase().includes(props.filteredName.toLowerCase())
        ).length === 0 && (
          <p className="text-center mt-8">No items with name like this</p>
        )}
      </div>
    </div>
  );
};

export default Feed;
