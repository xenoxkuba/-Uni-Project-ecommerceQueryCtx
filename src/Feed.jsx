import React, { useEffect } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { useState, useContext } from "react";
import { CartContext } from "./Store/cart-context";
import LinesEllipsis from "react-lines-ellipsis";
import { Link } from "react-router-dom";

const Feed = (props) => {
  const [cartCount, setCartCount] = useState(0);
  const { addToCart } = useContext(CartContext);
  const { cartItems } = useContext(CartContext);
  const [isFirstItemAdded, setIsFirstItemAdded] = useState(false);

  useEffect(() => {
    if (isFirstItemAdded) {
      console.log(cartItems); // wyświetla aktualny stan koszyka w konsoli
    }
  }, [cartItems, isFirstItemAdded]);

  const handleAddToCart = async (e, product) => {
    setCartCount((prevCount) => prevCount + 1);
    props.onHandleAddCartIcon(cartCount + 1);
    const { id, title, price } = product;
    addToCart(id, title, price);
    setIsFirstItemAdded(true);

    try {
      // Pobierz aktualną ilość kliknięć z bazy danych Firebase
      const response = await axios.get(
        `https://ai-assistant-5bd69-default-rtdb.firebaseio.com/clicks/${id}.json`
      );
      const currentClicks = response.data || 0;

      // Zapisz ilość kliknięć + 1 w bazie danych Firebase
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

  const fetchProducts = async () => {
    try {
      // Pobierz produkty z API fakestoreapi.com
      const { data } = await axios.get("https://fakestoreapi.com/products");

      // Pobierz informacje o kliknięciach z bazy danych Firebase
      const clicksResponse = await axios.get(
        "https://ai-assistant-5bd69-default-rtdb.firebaseio.com/clicks.json"
      );
      const clicksData = clicksResponse.data || {};

      // Sortuj produkty według liczby kliknięć
      data.sort((a, b) => (clicksData[b.id] || 0) - (clicksData[a.id] || 0));

      return data;
    } catch (error) {
      console.error("Błąd podczas pobierania danych:", error);
      return [];
    }
  };
  const { isLoading, error, data } = useQuery("products", fetchProducts);

  useEffect(() => {
    // fetchProducts();
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
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6 py-8 sm:px-32 px-8 bg-gradient-to-r from-green-600 to-lime-800">
        {data
          .filter((product) =>
            product.title
              .toLowerCase()
              .includes(props.filteredName.toLowerCase().trim())
          )
          .map((product) => (
            <div
              key={product.id}
              className="border rounded-lg overflow-hidden bg-slate-300 flex flex-col content-between hover:scale-105 transition-all  "
            >
              <Link to={`/product/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-32 sm:h-48 object-full"
                />
                <div className="pt-2 px-2  ">
                  <LinesEllipsis
                    text={product.title}
                    maxLine="2" // Maksymalna liczba wierszy
                    ellipsis="..."
                    trimRight
                    basedOn="letters"
                  />
                  {/* <p className="text-gray-700 font-bold sm:font-normal text-xxs sm:text-xs">
                  {product.description}
                </p> */}
                </div>
              </Link>
              <div className="grow flex flex-col-reverse">
                <div className="p-1 sm:p-4 sm:pt-1 ">
                  <p className="text-gray-900 font-bold text-sm sm:text-lg  pl-2 pb-1 sm:pb-2">
                    {product.price} PLN
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
