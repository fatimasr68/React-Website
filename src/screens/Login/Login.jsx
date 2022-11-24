import React from "react";
import "./Login.css";
import { Row, Col, Container, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseUser } from "@fortawesome/free-solid-svg-icons";
import { TextBox, CheckBox } from "../../components/index";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const validation = Yup.object().shape({
  loginEmail: Yup.string()
    .email("ایمیل وارد شده اشتباه می باشد!")
    .required("لطفا ایمیل راوارد کنید..."),

  loginPassword: Yup.string()
    .required("لطفا رمز عبور را وارد کنید...")
    .min(6, "طول رمز عبور حداقل 6 کاراکتر می باشد!")
    .matches(/^[a-zA-Z0-9]*$/, "رمز عبور وارد شده اشتباه می باشد!"),
});

const Login = () => {

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="login-page-area">
      <div className="top-polygon"></div>
      <Container className="px-4">
        <div className="login-form">
          <Row className="text-center mb-4">
            <Link to="/">
              <img
                alt="logo"
                src={require("../../assets/images/logo.png")}
                className="d-inline-block logo"
              />
            </Link>
            <h3>ورود به سایت</h3>
          </Row>

          <Row>
            <Formik
              initialValues={{
                loginEmail: "",
                loginPassword: "",
                rememberPassword: false,
              }}
              onSubmit={handleSubmit}
              validationSchema={validation}
            >
              {({values, errors}) => (
              <Form>
                <InputGroup className="mb-2">
                  <FontAwesomeIcon icon="envelope" />
                  <TextBox name="loginEmail" type="text" placeholder="ایمیل" />
                </InputGroup>

                <InputGroup className="mb-2">
                  <FontAwesomeIcon icon="eye" />
                  <TextBox
                    name="loginPassword"
                    type="password"
                    placeholder="رمز عبور"
                  />
                </InputGroup>

                <Row className="d-flex align-items-center mt-1 mb-3">
                  <Col lg={6} sm={6} className="text-end">
                    <CheckBox
                      name="rememberPassword"
                      label="مرا به خاطر بسپار"
                      checked={values.rememberPassword}
                    />
    
                  </Col>
                  <Col lg={6} sm={6} className="text-start">
                    <Link to="/forgotpassword">
                      رمز خود را فراموش کرده اید؟
                    </Link>
                  </Col>
                </Row>

                <Col lg={12} className="mb-3">
                  <button type="submit" className="default-btn">
                    ورود به سایت
                  </button>
                </Col>
              </Form>
               )}
            </Formik>
          </Row>
          <Row>
            <Col lg={12} className="mb-4">
              <span>آیا هنوز ثبت نام نکرده اید؟</span>
              <Link to="/signup" className="sign-link">
                {" "}
                ثبت نام
              </Link>
            </Col>
            <Col lg={12} className="social-sign-in mb-2">
              <div></div>
              <span className="login-from">ورود از طریق</span>
              <ul className="d-flex align-items-center justify-content-center pt-3 mb-4">
                <li>
                  <a
                    className="gg"
                    href="https://www.gmail.com/"
                    target="_blank"
                  >
                    <i className="fa fa-google"></i>
                  </a>
                </li>
                <li>
                  <a className="tw" href="https://twitter.com/" target="_blank">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="fb"
                    href="https://www.facebook.com/"
                    target="_blank"
                  >
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
              </ul>
            </Col>
            <Col lg={12} className="back-to-home">
              <FontAwesomeIcon icon={faHouseUser} />
              <Link to="/">بازگشت به صفحه اصلی</Link>
            </Col>
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

export default Login;
