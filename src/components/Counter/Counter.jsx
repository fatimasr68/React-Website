import React from "react";
import "./Counter.css";
import { Container, Row, Col } from "react-bootstrap";

const Counter = () => {
  return (
    <div className="counter-polygon-widget">
      <div className="light-blue-polygon-widget-bg">
        <div className="polygon-widget-inner">
          <Container>
            <Row>
              <Col lg={3} md={4} sm={4} className="col-6">
                <div className="item-box">
                  <img
                    src={require("../../assets/images/icon-online-learning.png")}
                    className="icon"
                    alt="courses count"
                  />
                  <h4>+ 250</h4>
                  <p>تعداد دوره ها</p>
                </div>
              </Col>
              <Col lg={3} md={4} sm={4} className="col-6">
                <div className="item-box">
                  <img
                    src={require("../../assets/images/icon-teacher.png")}
                    width={63}
                    height={60}
                    className="icon"
                    alt="teachers count"
                  />
                  <h4>+ 150</h4>
                  <p>تعداد اساتید</p>
                </div>
              </Col>
              <Col lg={3} md={4} sm={4} className="col-6">
                <div className="item-box">
                  <img
                    src={require("../../assets/images/icon-audience.png")}
                    className="icon"
                    alt="student count"
                  />
                  <h4>+ 750</h4>
                  <p>تعداد دانشجویان</p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Counter;
