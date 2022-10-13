import React from "react";
import {CourseItem} from "../index"
import coursesData from "./coursesData";
import { Col } from "react-bootstrap";
import { useState } from "react";

const Courses = () => {
  const [courseData, setCourseData] = useState(coursesData);
  return (
    <>
      {courseData.map((item) => {
        return (
          <Col lg={4} md={6} sm={12} key={item._id}>
            <CourseItem course={item} />
          </Col>
        );
      })}
    </>
  );
};

export default Courses;
