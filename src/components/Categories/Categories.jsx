import React from "react";
import categoriesData from "./categoriesData";
import { Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { Category, IconArea, Title } from "./Categories.style";


const Categories = () => {
  return (
    <>
      {categoriesData.map((category) => {
        return (
          <Col lg={3} md={6} sm={12} key={category._id}>
            <Category className="mt-lg-3 my-sm-2">
              <Link to="/">
                <IconArea className={`icon-${category._id}`}>
                  <FontAwesomeIcon icon={category.icon} />
                  <Icon icon={category.icon} />
                </IconArea>
                <Title>{category.title}</Title>
              </Link>
            </Category>
          </Col>
        );
      })}
    </>
  );
};

export default Categories;
