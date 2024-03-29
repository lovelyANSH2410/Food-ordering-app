import { LOGO_URL } from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  //let btnName = "Login";
  const [btnName, setBtnName] = useState(["Login"]);
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  //Subscribing to the store using a selector

  const cartItems = useSelector((store) => store.cart.items);

  //if no dependency array = useEffect will be called on every render
  //if dependency array is empty = [] = useEffect is called on only initial render(just once)
  //if dependency array is [btnName] = called when everytime btnName is updated
  useEffect(() => {
    console.log("useEffect");
  }, [btnName]);

  return (
    <div className="flex justify-between shadow-lg mb-3 bg-pink-100 rounded-3xl">
      <div className="logo-container">
        <img className="w-36" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 text-lg font-medium">
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4 hover:scale-105">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 hover:scale-105">
            <Link to="/about">About us</Link>
          </li>
          <li className="px-4 hover:scale-105">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="px-4 hover:scale-105">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 hover:scale-105">
            <Link to="/cart">Cart 🛒{cartItems.length}</Link>
          </li>
          <button
            className="login px-4 hover:scale-105"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="px-4 hover:scale-105">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
