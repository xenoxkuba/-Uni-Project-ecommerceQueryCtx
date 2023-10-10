import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../Store/cart-context";

const Cart = (props) => {
  const { cartItems } = useContext(CartContext);
  const { removeFromCart } = useContext(CartContext);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const hideModal = () => {
    props.onHandleHideModal();
  };

  const totalSum = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleRemove = (id) => {
    removeFromCart(id);
  };

  return (
    <>
      <div className="fixed  inset-0  z-10 overflow-y-auto z-[200]">
        <div
          className="fixed  inset-0 w-full h-full bg-black opacity-40"
          onClick={hideModal}
        ></div>
        <div className="flex items-center min-h-screen px-4 py-8">
          <div className="fixed right-0 flex flex-col w-44  sm:w-full h-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg overflow-y-scroll">
            <div className="mt-3  sm:flex mx-auto ">
              <div className="flex items-center justify-center flex-none w-12 h-12 mx-auto bg-lime-300 rounded-full">
                <FaShoppingCart />
              </div>
              <div className="mt-2 text-center sm:ml-4 sm:text-left">
                <h4 className=" text-lg font-medium text-gray-800">
                  Your Cart
                </h4>
                <div className="text-xs sm:text-lg">
                  {" "}
                  <div>
                    {cartItems.map((item, index) => (
                      <div key={`${item.id}-${index}`}>
                        <p>
                          {item.title}{" "}
                          {item.quantity > 1 && `(${item.quantity}x)`}
                        </p>
                        <p className="text-green-400">{item.price}</p>
                        {item.totalPrice && (
                          <p className="text-green-700">
                            Total: {item.totalPrice.toFixed(2)}
                          </p>
                        )}
                        <button
                          className="font-medium text-red-600"
                          onClick={() => handleRemove(item.id)}
                        >
                          Usuń
                        </button>
                        <p>---------------------------</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <p className="text-gray-600">
              Twój koszyk ({totalItems} przedmiotów)
            </p>
            <div className="font-bold items-end gap-2 mt-3 flex flex-grow">
              <p>Sum: {totalSum.toFixed(2)} zł</p>
            </div>
            <div className="items-end gap-2 mt-3 flex  ">
              <button
                className="w-full mt-2 p-2.5 flex-1 text-gray-800 bg-lime-500 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2  "
                onClick={hideModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
