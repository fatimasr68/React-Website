import React from "react";
import "./PanelSidebar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPen,
  faBook,
  faRightFromBracket,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

const PanelSidebar = () => {
  return (
    <div className="panel-sidebar">
      <ul>
        <li className="user-info text-center my-5">
          <img src={require("../../assets/images/teacher-1.jpg")} />
          <p className="mt-3">فاطمه صوری</p>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/panel">
            <i className="fa fa-bar-chart" aria-hidden="true"></i>
            <span className="me-2">داشبورد</span>
          </Link>
        </li>
        <li>
          <Link to="/panel/profile">
            <FontAwesomeIcon icon={faUserPen} />
            <span className="me-2">ویرایش پروفایل</span>
          </Link>
        </li>
        <li>
          <Link to="/panel/student-courses">
            <FontAwesomeIcon icon={faBook} />
            <span className="me-2">دوره های من</span>
          </Link>
        </li>
        <li>
          <Link to="/panel/courses-list">
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
  );
};

export default PanelSidebar;
