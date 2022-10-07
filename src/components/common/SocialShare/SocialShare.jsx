import React from "react";
import "./SocialShare.css";

const SocialShare = () => {
  return (
    <>
      <ul className="social-share-link d-flex align-items-center">
        <li className="social-share-title">اشتراک گذاری در: </li>
        <li>
          <a href="https://www.instagram.com/" target="_blank">
            <i className="fa fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/" target="_blank">
            <i className="fa fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/" target="_blank">
            <i className="fa fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/" target="_blank">
            <i className="fa fa-facebook"></i>
          </a>
        </li>
      </ul>
    </>
  );
};

export default SocialShare;
