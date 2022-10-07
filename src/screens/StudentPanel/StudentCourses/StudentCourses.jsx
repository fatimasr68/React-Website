import React from "react";
import "./StudentCourses.css";
import { Col, Row } from "react-bootstrap";
import CoursesTable from "../../../components/CoursesTable/CoursesTable";
import PanelSidebar from "../../../components/PanelSidebar/PanelSidebar";

const StudentCourses = () => {
  return (
    <div className="student-courses-area">
      <Row>
        <Col lg={3} md={3} sm={12}>
          <PanelSidebar />
        </Col>
        <Col lg={9} md={9} sm={12} className="px-4">
          <CoursesTable />
        </Col>
      </Row>
    </div>
  );
};

export default StudentCourses;
