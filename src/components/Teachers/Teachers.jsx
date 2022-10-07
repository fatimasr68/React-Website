import React from "react";
import teachersData from "./teachersData";
import { TeacherItem } from "../index";
import { Col } from "react-bootstrap";

const Teachers = () => {
  return (
    <>
      {teachersData.map((item) => {
        return (
          <Col lg={4} md={6} sm={12} key={item._id}>
            <TeacherItem teacher={item} />
          </Col>
        );
      })}
    </>
  );
};

export default Teachers;
