import "./App.css";
import Header from "./Header";
import Feed from "./Feed";
import InfoBanner from "./InfoBanner";
import { QueryClient, QueryClientProvider } from "react-query";
import Footer from "./Footer";
import Cart from "./Cart/Cart";
import { useState } from "react";
import { CartProvider } from "./Store/CartProvider";

const queryClient = new QueryClient();

function App() {
  const [filteredName, setFilteredName] = useState("");
  const [cartIconValue, setCartIconValue] = useState(0);
  const [isCartAnimated, setIsCartAnimated] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (inputValue) => {
    setFilteredName(inputValue);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };
  const handleHideModal = () => {
    setShowModal(false);
  };

  const handleAddCartIcon = (cartCount) => {
    setCartIconValue(cartCount);
    setIsCartAnimated(true);

    setTimeout(() => {
      setIsCartAnimated(false);
    }, 500);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <Header
          onHandleInputchange={handleInputChange}
          onHandleShowModal={handleShowModal}
          cartIconValue={cartIconValue}
          isCartAnimated={isCartAnimated}
        ></Header>
        <InfoBanner />
        <Feed
          filteredName={filteredName}
          onHandleAddCartIcon={handleAddCartIcon}
        ></Feed>
        {showModal && <Cart onHandleHideModal={handleHideModal}></Cart>}
        <Footer />
      </CartProvider>
    </QueryClientProvider>
  );
}

export default App;
