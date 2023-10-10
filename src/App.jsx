import "./App.css";
import Header from "./Header";
import Feed from "./Feed";
import InfoBanner from "./InfoBanner";
import { QueryClient, QueryClientProvider } from "react-query";
import Footer from "./Footer";
import Cart from "./Cart/Cart";
import Login from "./Login";
import { useState } from "react";
import { CartProvider } from "./Store/CartProvider";

const queryClient = new QueryClient();

function App() {
  const [filteredName, setFilteredName] = useState("");
  const [cartIconValue, setCartIconValue] = useState(0);
  const [isCartAnimated, setIsCartAnimated] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showLogIn, setShowLogIn] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (inputValue) => {
    setFilteredName(inputValue);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };
  const handleHideModal = () => {
    setShowModal(false);
  };

  const handleShowLogIn = () => {
    setShowLogIn(true);
  };

  const handleHideLogIn = () => {
    setShowLogIn(false);
  };

  const handleAddCartIcon = (cartCount) => {
    setCartIconValue(cartCount);
    setIsCartAnimated(true);

    setTimeout(() => {
      setIsCartAnimated(false);
    }, 500);
  };

  const handleLoginSuccess = (username, password) => {
    if (username === "adminaiwsb" && password === "adminaiwsb") {
      setIsLoggedIn(true);
      setUsername(username);
      setPassword(password);
      setShowLogIn(false);
    } else {
      alert("Invalid credentials");
    }
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
  };

  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <Header
          onHandleInputchange={handleInputChange}
          onHandleShowModal={handleShowModal}
          onHandleShowLogIn={handleShowLogIn}
          onLogout={handleLogout}
          cartIconValue={cartIconValue}
          isCartAnimated={isCartAnimated}
          isLoggedIn={isLoggedIn}
        ></Header>
        <InfoBanner />
        <Feed
          filteredName={filteredName}
          onHandleAddCartIcon={handleAddCartIcon}
        ></Feed>
        {showModal && <Cart onHandleHideModal={handleHideModal}></Cart>}
        {showLogIn && (
          <Login
            onHandleHideLogIn={handleHideLogIn}
            onLoginSuccess={handleLoginSuccess}
          ></Login>
        )}
        <Footer />
      </CartProvider>
    </QueryClientProvider>
  );
}

export default App;
