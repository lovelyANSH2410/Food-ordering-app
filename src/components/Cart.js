import { useDispatch, useSelector } from "react-redux";
import ItemList from "./Itemlist";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <div className="flex justify-between w-6/12 m-auto bg-gray-100 p-4 rounded-lg">
        <h1 className="text-2xl font-bold">Cart</h1>
        <button
          className=" p-2 bg-red-500 text-white rounded-lg font-medium shadow-md"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>
      <div className="bg-gray-50 p-4 shadow-lg w-6/12 my-4 m-auto rounded-lg">
        {cartItems.length === 0 ? (
          <h1>Your cart is empty!</h1>
        ) : (
          <div>
            <ItemList items={cartItems} />
            <button className=" p-2 bg-green-500 text-white rounded-lg font-medium shadow-md">
              Proceed to payemnt
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
