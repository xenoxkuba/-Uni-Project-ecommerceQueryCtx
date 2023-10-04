import { useState, useContext } from "react";
import "./Cart.css";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const HeaderAIPanel = (props) => {
  return (
    <header className="bg-black py-1 sm:px-6 px-2 fixed top-0 left-0 right-0 ">
      <div className="max-w-8xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-white text-sm sm:text-lg font-bold">
            AI Panel
          </span>
        </div>
        <div className="flex items-center text-base sm:text-lg ">
          <span className="text-gray-200 hover:text-white mr-4 ">AI Panel</span>
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

export default HeaderAIPanel;
