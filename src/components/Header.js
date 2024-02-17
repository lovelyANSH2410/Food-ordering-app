import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  //let btnName = "Login";
  let [btnName, setBtnName] = useState(["Login"]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li className="nav-btn">Home</li>
          <li className="nav-btn">About us</li>
          <li className="nav-btn">Contact us</li>
          <li className="nav-btn">Cart</li>
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
