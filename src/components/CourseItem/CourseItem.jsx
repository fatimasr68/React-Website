import React, { useState } from "react";
import "./CourseItem.css";
import { Card } from "react-bootstrap";
import { faVideo, faArrowLeft } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

//course is prop
const CourseItem = ({ course }) => {
  const [likeIcon, setLikeIcon] = useState(false);
  const [likesCount, setLikeCount] = useState(course.likeCount);

  const likeHandler = () => {
    if (likeIcon) {
      setLikeIcon(false);
      setLikeCount(likesCount - 1);
    } else {
      setLikeIcon(true);
      setLikeCount(likesCount + 1);
    }
  };

  return (
    <article>
      <Card className="course-item my-3 p-0">
        <Link to={`/course/${course._id}`}>
          <Card.Img
            src={course.courseImage}
            varient="top"
            className="course-img"
          />
        </Link>

        <Card.Body className="px-4 pb-4">
          <div className="d-flex justify-content-between align-items-center">
            <Card.Text as="span">
              <FontAwesomeIcon
                icon={faVideo}
                className="ms-1"
                color="#04BEFE"
              />
              {course.videoCount} جلسه
            </Card.Text>
            <Card.Text as="span" onClick={likeHandler}>
              <i
                onClick={likeHandler}
                className={`fa fa-heart ${
                  likeIcon ? "heart-like" : "heart-no-like"
                } ms-1`}
              ></i>
              {likesCount}
            </Card.Text>
          </div>

          <header>
            <Link to={`/course/${course._id}`}>
              <Card.Title as="h3" className="mt-4 mb-4">
                {course.courseTitle}
              </Card.Title>
            </Link>
          </header>
          <footer>
            <div className="d-flex justify-content-between align-items-center">
              <Card.Text>مدرس : {course.teacherName}</Card.Text>
              <Card.Img
                src={course.teacherImage}
                className="justify-align-end teacher-img"
              />
            </div>

            <div className="d-flex align-items-center rating_reviews">
              <div className=" align-items-center rating">
                <input type="radio" name="rating" value="5" id="5" />
                <label htmlFor="5">☆</label>
                <input type="radio" name="rating" value="4" id="4" />
                <label htmlFor="4">☆</label>
                <input type="radio" name="rating" value="3" id="3" />
                <label htmlFor="3">☆</label>
                <input type="radio" name="rating" value="2" id="2" />
                <label htmlFor="2">☆</label>
                <input type="radio" name="rating" value="1" id="1" />
                <label htmlFor="1">☆</label>
              </div>
              <Card.Text as="span">4.7</Card.Text>
              <Card.Text as="span">(32 امتیاز مدرس)</Card.Text>
            </div>

            <div
              className="mx-2 my-3"
              style={{ borderTop: "1px solid #E7E5E5" }}>
            </div>

            <div className="d-flex justify-content-between">
              <Card.Text className="course-price">
                {course.price} تومان
              </Card.Text>
              <Link to={`/course/${course._id}`}>
                <Card.Text as="span" className="mx-2 more">
                  بیشتر
                </Card.Text>
                <FontAwesomeIcon icon={faArrowLeft} className="more" />
              </Link>
            </div>
            <div className="d-flex justify-content-between last_section"></div>
          </footer>
        </Card.Body>
      </Card>
    </article>
  );
};

export default CourseItem;
