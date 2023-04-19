import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-3">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 flex  items-center">
        <a
          href="https://www.linkedin.com/in/jakub-purczy%C5%84ski-bb9ab2255/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white ml-1"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/xenoxkuba?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white ml-5"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;
