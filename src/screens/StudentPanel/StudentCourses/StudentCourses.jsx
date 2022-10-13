import React from "react";
import "./StudentCourses.css";
import CoursesTable from "../../../components/CoursesTable/CoursesTable";

const StudentCourses = () => {
  return (
    <div className="student-courses-area">
      <CoursesTable />
      <div className="pagination mt-2 mb-3"></div>
    </div>
  );
};

export default StudentCourses;
