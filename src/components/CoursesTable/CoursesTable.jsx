import React from "react";
import "./CoursesTable.css";
import coursesData from "../Courses/coursesData";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faPlus, faEye} from "@fortawesome/fontawesome-free-solid";

const CoursesTable = () => {
  return (
    <>
      <Table className="courses-table">
        <thead>
          <tr>
            <th>عکس دوره</th>
            <th>نام دوره</th>
            <th>نام استاد</th>
            <th>تاریخ شروع</th>
            <th>ظرفیت دوره</th>
            <th>قیمت</th>
            <th>مشاهده</th>
            <th className="remove-course">حذف</th>
            <th className="add-course">افزودن</th>
          </tr>
        </thead>
        <tbody>
          {coursesData.map((course) => {
            return (
              <tr key={course._id}>
                <td>
                  <Link to="/coursedetail">
                    <img src={course.courseImage} alt="" />
                  </Link>
                </td>
                <td>
                  <span>{course.courseTitle}</span>
                </td>
                <td>
                  <span>{course.teacherName}</span>
                </td>
                <td>
                  <span>1401/4/1</span>
                </td>
                <td>
                  <span>60 نفر</span>
                </td>
                <td>
                  <span>{course.price} تومان</span>
                </td>
                <td>
                  <Link to="/coursedetail">
                    <FontAwesomeIcon icon={faEye} />
                  </Link>
                </td>
                <td className="remove-course">
                  <FontAwesomeIcon icon={faTrashCan} />
                </td>
                <td className="add-course">
                  <FontAwesomeIcon icon={faPlus} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default CoursesTable;
