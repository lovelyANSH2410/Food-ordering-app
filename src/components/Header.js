import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  //let btnName = "Login";
  const [btnName, setBtnName] = useState(["Login"]);
  const onlineStatus = useOnlineStatus();

  //if no dependency array = useEffect will be called on every render
  //if dependency array is empty = [] = useEffect is called on only initial render(just once)
  //if dependency array is [btnName] = called when everytime btnName is updated
  useEffect(() => {
    console.log("useEffect");
  }, [btnName]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="nav-btn">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-btn">
            <Link to="/about">About us</Link>
          </li>
          <li className="nav-btn">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="nav-btn">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="nav-btn">Cart 🛒</li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
