import React, { useState } from "react";
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCheck, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { clearStorage, getItem } from "../../core/services/storage/storage";
import { Link } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { Dropdown } from "react-bootstrap";
import { faShoppingCart } from "@fortawesome/fontawesome-free-solid";

const Login = () => {
  const user = JSON.parse(getItem("user"));
  const userToken = getItem("token");
  const [userIsLogin, setUserIsLogin] = useState(userToken ? true : false);
  const [email, setEmail] = useState(user.email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let obj = { email: email };
  };

  const goUserPanel = () => {
    const decode = jwtDecode(userToken);
    getItem("role", decode.role);
    if (decode.role !== "student") {
      window.location.href = "http://localhost:3001/auth/" + getItem("token");
    }
    else if(decode.role === "student") {
      window.location.href = "http://localhost:3000/panel/";
    }
  };

  return (
    <div className="login-area d-flex">
      {userIsLogin ? (
        <div
          onSubmit={handleSubmit}
          className="navbar-left-items d-flex align-items-center"
        >
          <Link to="/">
            <FontAwesomeIcon
              icon={faShoppingCart}
              color="#08A9E6"
              className="user-shopping-cart ms-2"
            />
          </Link>

          <Dropdown className="d-inline mx-2">
            <Dropdown.Toggle id="dropdown-autoclose-true">
              <FontAwesomeIcon icon={faUserCheck} className="ms-2" color="#08A9E6" />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={goUserPanel}>
                {user.fullName}
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  setUserIsLogin(false);
                  clearStorage();
                }}
              >
                خروج
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      ) : (
        <div className="navbar-left-items d-flex align-items-center">
          <Link to="/">
            <FontAwesomeIcon
              icon={faShoppingCart}
              color="#FA377B"
              className="shopping-cart ms-lg-3 ms-sm-2"
            />
          </Link>
          <Link to="/login">
            <button className="login-register-btn">
              <FontAwesomeIcon icon={faUserPlus} className="ms-2" />
              ثبت نام / ورود
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Login;
