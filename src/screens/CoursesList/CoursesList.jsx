import React, { useState } from "react";
import "./CoursesList.css";
import coursesData from "../../components/Courses/coursesData";
import { CourseItem } from "../../components/index";
import CoursesFilter from "../../components/CoursesFilter/CoursesFilter";
import { Container, Row, Col, Form, InputGroup } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGrip,
  faList,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";


const CoursesList = () => {
  const [courseData, setCourseData] = useState(coursesData);
  const [filters, setFilters] = useState([]);
  console.log(filters);


  const filterCourseLevels = (e) => {
    if (e.target.value === "") {
      setCourseData(coursesData);
    } else {
      setCourseData(
        coursesData.filter(
          (course) => course.level.indexOf(e.target.value) >= 0
        )
      );
    }
  };

  const filterCourseCategories = (e) => {
    if (e.target.value) {
      const filteredCourses = coursesData
        .filter((course) => course.category.includes(e.target.value));
        setCourseData(filteredCourses);
    } else {
      setCourseData(coursesData);
    };      
  };



  const filterCourseCategories1 = (e) => {
    const categoryItem = e.target.parentNode;
    const categories = categoryItem.parentNode;

    // Loop through filter courseData
    const filterList = Array.from(categories.querySelectorAll("li"));

    // Create new array based on the checked filters and change filter state
    let newFilterList = filterList
      .filter((item) => item.querySelector("input:checked"))
      .map((item) => item.querySelector("label").textContent);

    setFilters(newFilterList);

      const filteredCourses = coursesData
        // .filter((course) => course.category.includes(e.target.value));
        .filter((course) => filters.includes(course.category))
        setCourseData(filteredCourses);
        console.log(filteredCourses)
  };

 



  return (
    <>
      <div className="courses-list-area">
        <div className="courses-banner-bg inner-banner mb-3">
          <Container>
            <Row>
              <Col className="inner-title text-center">
                <FontAwesomeIcon icon={faGraduationCap} />
                <h2>لیست دوره های آموزشی</h2>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="px-4">
          <Row>
            {/* region Sidebar */}
            <Col lg={3} sm={12}>
              <div className="courses-page-sidebar">
                <CoursesFilter
                  filterCourseCategories={filterCourseCategories}
                  filterCourseLevels={filterCourseLevels}
                />
              </div>
            </Col>

            {/* //#region Courses List */}
            <Col lg={9} sm={12}>
              <Row>
                <Col>
                  <div className="search-header px-3 py-2">
                    <Row>
                      <Col lg={4} sm={12} className="text-end">
                        <InputGroup className="search-box">
                          <InputGroup.Text id="courseSearch">
                            <FontAwesomeIcon icon="search" color="#1ABBFF" />
                          </InputGroup.Text>
                          <Form.Control
                            placeholder="جستجو ..."
                            aria-label=""
                            aria-describedby="courseSearch"
                          />
                        </InputGroup>
                      </Col>
                      <Col
                        lg={8}
                        sm={12}
                        className="d-flex align-items-center justify-content-end grid-show"
                      >
                        <FontAwesomeIcon
                          icon={faList}
                          className="ms-2"
                          color="#777"
                        />
                        <FontAwesomeIcon icon={faGrip} color="#1ABBFF" />
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
              <Row>
                {/* <Courses /> */}
                {courseData.map((item) => {
                  return (
                    <Col lg={4} md={6} sm={12} key={item._id}>
                      <CourseItem course={item} />
                    </Col>
                  );
                })}
              </Row>
              <Row>
                <Col lg={12}>
                  <div className="pagination mt-2 mb-5"></div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default CoursesList;
