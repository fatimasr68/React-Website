import React from "react";
import "./Newsletter.css";
import { Container, Row, Col } from "react-bootstrap";

const Newsletter = () => {
  return (
    <>
      <div className="newsletter-area section-container">
        <Container>
          <Row className="px-3 px-lg-0 pe-lg-3">
            <Col lg={6} sm={12}>
              <h2>عضویت در خبرنامه</h2>
              <p>با عضویت در خبرنامه از برگزاری دوره های جدید مطلع شوید...</p>
            </Col>

            <Col lg={6} sm={12}>
              <form
                className="newsletter-form"
                data-toggle="validator"
                method="POST"
                noValidate={true}
              >
                <input
                  type="email"
                  className="form-control"
                  placeholder="لطفا ایمیل خود را وارد کنید..."
                  name="EMAIL"
                  required=""
                  autoComplete="off"
                />
                <button type="submit" className="subscribe-btn">
                  عضویت
                </button>
                <div id="validator-newsletter" className="form-result"></div>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Newsletter;
