import React from "react";
import "./PanelSidebar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPen, faBook, faRightFromBracket, faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const PanelSidebar = () => {
  return (
    <div className="panel-sidebar-area">
        <div className="panel-sidebar">
      {/* <div className="navbar-brand my-3">
        <img
          alt=""
          src={require("../../assets/images/logo.png")}
          className="d-inline-block logo ms-2"
        />{" "}
        <span>آلفا</span>
      </div> */}
      <ul>
        <li className="user-info text-center my-5">
          <img src={require("../../assets/images/teacher-1.jpg")} />
          <p className="mt-3">فاطمه صوری</p>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/">
            <i className="fa fa-bar-chart" aria-hidden="true"></i>
            <span className="me-2">داشبورد</span>
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <FontAwesomeIcon icon={faUserPen} />
            <span className="me-2">ویرایش پروفایل</span>
          </Link>
        </li>
        <li>
          <Link to="/student-courses">
            <FontAwesomeIcon icon={faBook} />
            <span className="me-2">دوره های من</span>
          </Link>
        </li>
        <li>
          <Link to="/courses-list">
            <i className="fa fa-list-ul" aria-hidden="true"></i>
            <span className="me-2">لیست دوره ها</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            {/* <FontAwesomeIcon icon={faRightFromBracket} /> */}
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
            <span className="me-2">خروج</span>
          </Link>
        </li>
      </ul>
    </div>
    </div>
  );
};

export default PanelSidebar;
