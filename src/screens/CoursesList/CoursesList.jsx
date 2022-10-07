import React, { useState } from "react";
import "./CoursesList.css";
import { CheckBox, Courses } from "../../components";
import categoriesData from "../../components/Categories/categoriesData";
import { Container, Row, Col, Form, InputGroup } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGrip,
  faList,
  faGraduationCap,
  faFilterCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import FormRange from "react-bootstrap/esm/FormRange";

const CoursesList = (category) => {
  const [priceValue, setPriceValue] = useState(50000);

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
                <div className="course-filter d-flex justify-content-between mb-3">
                  <h3 className="m-0">فیلترها</h3>
                  <p>
                    <FontAwesomeIcon icon={faFilterCircleXmark} />
                    <span className="remove-filter-btn">حذف فیلترها</span>
                  </p>
                </div>

                <div className="sidebar-widget">
                  <h3>دسته بندی</h3>
                  <Form>
                    <ul className="filter-content">
                      {categoriesData.map((category) => {
                        return (
                          <li
                            key={category._id}
                            className="d-flex justify-content-between align-items-center"
                          >
                            {/* <input
                            id={`check-${category._id}`}
                            type="checkbox"
                            name="check"
                          />
                          <label htmlFor={`check-${category._id}`}>
                            {category.title}{" "}
                          </label> */}
                            <Form.Check
                              reverse
                              type="checkbox"
                              id={`categoryCheck-${category._id}`}
                              label={category.title}
                            />
                            
                            {/* <CheckBox 
                              name={`categoryCheck-${category._id}`}
                              label={category.title}
                            /> */}

                            <span className="category-count">
                              {category.count}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </Form>
                </div>

                <div className="sidebar-widget">
                  <h3>سطح دوره</h3>
                  <Form>
                    <Form.Check
                      reverse
                      type="checkbox"
                      id="elementary"
                      label="مقدماتی"
                    />

                    <Form.Check
                      reverse
                      type="checkbox"
                      id="intermediate"
                      label="متوسط"
                    />

                    <Form.Check
                      reverse
                      type="checkbox"
                      id="advanced"
                      label="پیشرفته"
                    />
                  </Form>
                </div>

                <div className="sidebar-widget">
                  <h3>وضعیت دوره</h3>
                  <Form>
                    <Form.Check
                      reverse
                      type="checkbox"
                      id="advand"
                      label="در حال ثبت نام"
                    />
                    <Form.Check
                      reverse
                      type="checkbox"
                      id="avanced"
                      label="ظرفیت تکمیل"
                    />
                    <Form.Check
                      reverse
                      type="checkbox"
                      id="anced"
                      label="همه دوره ها"
                    />
                  </Form>
                </div>

                <div className="sidebar-widget">
                  <h3>محدوده قیمت</h3>

                  <div className="sliderArea">
                    <Form.Group as={Row}>
                      <Col lg={12}>
                        <Form.Control
                          type="text"
                          value={`${priceValue} تومان`}
                          onChange={(e) => setPriceValue(e.target.value)}
                          size="sm"
                          className="mb-2"
                        />
                      </Col>
                      <Col lg={12}>
                        <FormRange
                          className="custom-range"
                          value={priceValue}
                          onChange={(e) => setPriceValue(e.target.value)}
                          size="sm"
                          min={50000}
                          max={1000000}
                        />
                      </Col>
                      <Col lg={12} className="d-flex justify-content-between">
                        <Form.Text className="text-end m-0 p-0">
                          ارزان ترین
                        </Form.Text>
                        <Form.Text className="text-start m-0 p-0">
                          گران ترین
                        </Form.Text>
                      </Col>
                      <Col>
                        <Form.Switch
                          id="freeSwitch"
                          label="فقط دوره های رایگان"
                          className="custom-switch mt-4"
                        />
                      </Col>
                    </Form.Group>
                  </div>
                </div>
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
                        className="d-flex align-items-center justify-content-end"
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
                <Courses />
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
