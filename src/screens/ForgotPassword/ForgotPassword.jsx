import React from "react";
import "./ForgotPassword.css";
import { Row, Col, Container, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightToBracket,
  faHouseUser,
} from "@fortawesome/free-solid-svg-icons";
import { Formik, Form } from "formik";
import { TextBox } from "../../components/index";
import * as Yup from "yup";


const validation = Yup.object().shape({
  email: Yup.string()
    .email("ایمیل وارد شده اشتباه می باشد!")
    .required("لطفا ایمیل راوارد کنید...")
});


const ForgotPassword = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="forgot-password-area">
      <div className="top-polygon"></div>
      <Container>
        <div className="login-form">
          <Row className="text-center mb-4">
            <Link to="/">
              <img
                alt="logo"
                src={require("../../assets/images/logo.png")}
                className="d-inline-block logo"
              />
            </Link>
            <h3>رمز خود را فراموش کرده اید؟</h3>
          </Row>

          <Row>
            <Formik 
               initialValues={{
                email: "",
              }}
              onSubmit={handleSubmit}
              validationSchema={validation}>
            <Form>
              <Col lg={12} className="mb-3">
                <p>
                  لطفا ایمیلی که با آن ثبت نام کرده اید را وارد کنید تا ایمیل
                  بازیابی برای شما ارسال شود.
                </p>
              </Col>
              <Col lg={12} className="mb-2">
                  <InputGroup className="mb-2">
                    <FontAwesomeIcon icon="envelope" />
                    <TextBox name="email" type="email" placeholder="ایمیل" />
                  </InputGroup>
              </Col>
              <Col lg={12} className="mt-3 mb-4">
                <button type="submit" className="default-btn">
                  ارسال
                </button>
              </Col>
              <Col lg={12} className="mb-4 back-to-login">
                <FontAwesomeIcon icon={faArrowRightToBracket} />
                <Link to="/login">بازگشت به صفحه ورود</Link>
              </Col>
              <Col lg={12} className="back-to-home">
                <FontAwesomeIcon icon={faHouseUser} />
                <Link to="/">بازگشت به صفحه اصلی</Link>
              </Col>
            </Form>
                          
            </Formik>
          </Row>
        </div>
      </Container>

      <div className="bottom-polygon">
      <div className="radius-shape radius-shape-1"></div>
        <div className="radius-shape radius-shape-2"></div>
        <div className="radius-shape radius-shape-3"></div>
        <div className="radius-shape radius-shape-4"></div>
      </div>
    </div>
  );
};

export default ForgotPassword;
