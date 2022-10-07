import React from "react";
import "./Services.css";
import servicesData from "./servicesData";
import { Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icon } from "@iconify/react";

const Services = () => {
  return (
    <>
      {servicesData.map((item) => {
        return (
          <Col lg={6} md={6} sm={12} key={item._id}>
            <div className={`service-item service-item-${item._id}`}>
              <a href={`/services/service=${item._id}`}>
                <span className="icon">
                  <Icon icon={item.icon} />
                  <FontAwesomeIcon icon={item.icon} />
                </span>
                <h3>{item.title}</h3>
              </a>
            </div>
          </Col>
        );
      })}
    </>
  );
};

export default Services;
