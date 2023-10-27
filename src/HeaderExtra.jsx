import "./Cart.css";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "./Store/cart-context";
import { useContext } from "react";

const HeaderExtra = (props) => {
  const { cartItems } = useContext(CartContext);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleShowModal = () => {
    props.onHandleShowModal();
  };

  return (
    <header className="bg-black py-1 sm:px-6 px-2  fixed top-0 left-0 right-0  ">
      <div className="max-w-8xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-white text-sm sm:text-lg font-bold">
            Ecommerce
          </span>
        </div>
        <div className="flex items-center text-base sm:text-lg ">
          {props.isITAIPanel ? (
            <span className="text-gray-200 hover:text-white mr-4 ">
              AI Panel
            </span>
          ) : (
            <>
              <span className="text-gray-200 hover:text-white mr-4 ">
                Product Details
              </span>
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
                  {cartItems}
                </span>
              </a>
            </>
          )}

          <span className="mx-2 text-gray-500">|</span>
          <a href="#" className="text-gray-200 hover:text-white mr-4 ">
            <span className="ml-2">
              <Link to="/">Exit</Link>
            </span>
          </a>
          <span className="mx-2 text-gray-500">|</span>
        </div>
      </div>
    </header>
  );
};

export default HeaderExtra;
