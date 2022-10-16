import React from "react";
import "./Categories.css";
import categoriesData from "./categoriesData";
import { Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icon } from "@iconify/react";

const Categories = (category) => {
  return (
    <>
      {categoriesData.map((category) => {
        return (
          <Col lg={3} md={6} sm={12} key={category._id}>
            <div className="category-item mt-lg-3 my-sm-2">
              <a href={`/categories/category=${category._id}`}>
                <span className={`icon icon-${category._id}`}>
                  <FontAwesomeIcon icon={category.icon} />
                  <Icon icon={category.icon} />
                </span>
                <h3>{category.title}</h3>
              </a>
            </div>
          </Col>
        );
      })}
    </>
  );
};

export default Categories;
