import { useState, useContext } from "react";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { CartContext } from "./Store/cart-context";
import "./Cart.css";

const Header = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { cartItems } = useContext(CartContext);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleInputValue = (event) => {
    setSearchTerm(event.target.value);
    props.onHandleInputchange(event.target.value);
  };

  const handleShowModal = () => {
    props.onHandleShowModal();
  };

  const handleShowLogIn = () => {
    props.onHandleShowLogIn();
  };

  return (
    <header className="bg-black py-1 sm:px-6 px-2 fixed top-0 left-0 right-0 ">
      <div className="max-w-8xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-white text-sm sm:text-lg font-bold">
            Ecommerce
          </span>
          <form className="ml-4">
            <div className="flex items-center">
              <input
                className="bg-gray-700 text-white rounded-l-full py-2 px-2 sm:px-4 leading-tight focus:outline-none focus:bg-white focus:text-gray-900 sm:w-64 w-16 sm:text-sm text-xs h-8 sm:h-10 "
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleInputValue}
              />
              <button
                className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-r-full focus:outline-none focus:shadow-outline sm:w-auto w-3 sm:py-2.5  px-5 sm:px-7  text-sm h-8 sm:h-10  "
                type="button"
              >
                <FaSearch />
              </button>
            </div>
          </form>
        </div>
        <div className="flex items-center text-base sm:text-lg ">
          <a href="#" className="text-gray-200 hover:text-white mr-4 ">
            <span className="ml-2" onClick={handleShowLogIn}>
              AI Panel
            </span>
          </a>
          <span className="mx-2 text-gray-500">|</span>
          <a href="#" className="text-gray-200 hover:text-white mr-4 ">
            <span className="ml-2" onClick={handleShowLogIn}>
              Login
            </span>
          </a>
          <span className="mx-2 text-gray-500">|</span>
          <a
            href="#"
            className={`text-red-200 hover:text-white relative ${
              props.isCartAnimated ? "animate-bounce-slow " : ""
            } `}
            onClick={handleShowModal}
          >
            <span className="ml-2 pr-4 pl-7">
              <FaShoppingCart className="FaShoppingCart" />
            </span>
            <span className="bg-red-500 text-white text-xs rounded-full absolute top-0 right-0 px-1 py-0.5">
              {totalItems}
            </span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
