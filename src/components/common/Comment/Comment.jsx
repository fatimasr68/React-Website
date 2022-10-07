import React from "react";
import "./Comment.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import DefaultButton from "../Inputs/DefaultButton";

const Comment = () => {
  return (
    <div className="comment mb-5">
      <h4>
        <FontAwesomeIcon icon={faPenToSquare} className="ms-2" />
        درمورد این پست نظر دهید
      </h4>
      <textarea placeholder="لطفا نظر خود را وارد کنید..." />
      <DefaultButton text="ارسال دیدگاه" />
    </div>
  );
};

export default Comment;
