import React from "react";
import logo from "../images/Mia.png";
import LogOutIcon from "../images/logout-icon.svg";
import { useNavigate } from "react-router-dom";

const Navbaar = () => {
  const navigate = useNavigate();
  const LogOut = () => {
    localStorage.removeItem("mia-useId");
    navigate("/MiaPostNpim");
  };
  return (
    <div>
      <nav className="navbar" style={{ background: "#ffd1d9" }}>
        <div className="container-fluid">
          <img src={logo} alt="logo_Not_Avalable" className="logo-styling" />
          <h5>MIA FEEDBACK FORM</h5>
          <div className="d-flex">
            <img
              src={LogOutIcon}
              alt="logo_Not_Avalable"
              className="logout"
              onClick={LogOut}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbaar;
