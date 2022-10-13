import React from "react";
import "./AllCoursesList.css";
import CoursesTable from "../../../components/CoursesTable/CoursesTable";

const AllCoursesList = () => {
  return (
    <div className="all-courses-area">
      <CoursesTable />
      <div className="pagination mt-2 mb-3"></div>
    </div>
  );
};

export default AllCoursesList;
