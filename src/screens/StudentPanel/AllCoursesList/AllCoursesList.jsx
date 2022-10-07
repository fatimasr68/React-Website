import React from "react";
import "./AllCoursesList.css";
import { Col, Row } from "react-bootstrap";
import CoursesTable from "../../../components/CoursesTable/CoursesTable";
import PanelSidebar from "../../../components/PanelSidebar/PanelSidebar";

const AllCoursesList = () => {
  return (
    <div className="all-courses-area">
      <Row>
        <Col lg={3} md={3} sm={12}>
          <PanelSidebar />
        </Col>
        <Col lg={9} md={9} sm={12} className="px-4">
          <CoursesTable />
          <div className="pagination mt-2 mb-3"></div>
        </Col>
      </Row>
    </div>
  );
};

export default AllCoursesList;
