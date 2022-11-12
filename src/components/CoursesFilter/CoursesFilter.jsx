import React, { useState } from "react";
import "./CoursesFilter.css";
import categoriesData from "../Categories/categoriesData";
import FormRange from "react-bootstrap/esm/FormRange";
import { Row, Col, Form } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilterCircleXmark } from "@fortawesome/free-solid-svg-icons";

const CoursesFilter = (props) => {
  const allCategories = categoriesData.map((item) => {
    return item.title;
  });
  
  const [priceValue, setPriceValue] = useState(50000);

  return (
    <>
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
                            label={category.title}
                            value={category.title}
                            onChange={props.filterCourseCategories}
                          />
                          <label htmlFor={`check-${category._id}`}>
                            {category.title}{" "}
                          </label> */}
                  <Form.Check
                    reverse
                    type="checkbox"
                    id={`categoryCheck-${category._id}`}
                    label={category.title}
                    value={category.title}
                    onChange={props.filterCourseCategories}
                  />

                  {/* <CheckBox 
                              name={`categoryCheck-${category._id}`}
                              label={category.title}
                            /> */}

                  <span className="category-count">{category.count}</span>
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
            value="مقدماتی"
            onChange={props.filterCourseLevels}
          />

          <Form.Check
            reverse
            type="checkbox"
            id="intermediate"
            label="متوسط"
            value="متوسط"
            onChange={props.filterCourseLevels}
          />

          <Form.Check
            reverse
            type="checkbox"
            id="advanced"
            label="پیشرفته"
            value="پیشرفته"
            onChange={props.filterCourseLevels}
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
          <Form.Check reverse type="checkbox" id="anced" label="همه دوره ها" />
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
              <Form.Text className="text-end m-0 p-0">ارزان ترین</Form.Text>
              <Form.Text className="text-start m-0 p-0">گران ترین</Form.Text>
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
    </>
  );
};

export default CoursesFilter;
