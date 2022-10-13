import React, { useRef } from "react";
import "./SignUp.css";
import { Row, Col, Container, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseUser } from "@fortawesome/free-solid-svg-icons";
import { Formik, Form } from "formik";
import { TextBox, CheckBox } from "../../components/index";
import * as Yup from "yup";


const validation = Yup.object().shape({
  signUpName: Yup.string()
    .required("لطفا نام و نام خانوادگی را وارد کنید...")
    .min(3, "طول نام و نام خانوادگی باید حداقل 3 کاراکتر باشد!")
    .matches(/^[آ-یa-zA-Z]+$/, "نام و نام خانوادگی فقط شامل حروف می باشد!"),

  signUpEmail: Yup.string()
    .email("ایمیل وارد شده اشتباه می باشد!")
    .required("لطفا ایمیل راوارد کنید..."),

  signUpPassword: Yup.string()
    .required("لطفا رمز عبور را وارد کنید...")
    .min(6, "طول رمز عبور باید حداقل 6 کاراکتر باشد!")
    .matches(
      /^[a-zA-Z0-9]*$/,
      "رمز عبور شامل حروف بزرگ، کوچک و اعداد می باشد!"
    ),

  signUpPhone: Yup.string()
    .required("لطفا شماره تلفن را وارد کنید...")
    .min(11, "شماره تلفن وارد شده اشتباه می باشد!")
    .matches(/^[0-9]*$/, "شماره تلفن وارد شده اشتباه می باشد!"),

  signUpNationalCode: Yup.string()
    .max(10, "کد ملی وارد شده اشتباه می باشد!")
    .matches(/^[0-9]*$/, "کد ملی وارد شده اشتباه می باشد!"),

  signUpBirthDate: Yup.string().matches(
    /([1][3-4][0-9]\d)[/](\d{2})[/]\d{2}/,
    "فرمت تاریخ اشتباه می باشد!"
  ),
});

const SignUp = (errors) => {
  const onSubmit = (values) => {
    console.log(values);
  };

  const textboxRef = useRef();

  return (
    <div className="signup-area">
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
            <h3>ثبت نام در سایت</h3>
          </Row>

          <Row>
            <Formik
              initialValues={{
                signUpName: "",
                signUpEmail: "",
                signUpPassword: "",
                signUpPhone: "",
                signUpNationalCode: "",
                signUpBirthDate: "",
                checkRules: false,
              }}
              onSubmit={onSubmit}
              validationSchema={validation}
              innerRef={textboxRef}
            >
              {({ values, errors }) => (
                <Form>
                  <InputGroup className="mb-2">
                    <FontAwesomeIcon icon="user" />
                    <TextBox
                      name="signUpName"
                      type="text"
                      placeholder="نام و نام خانوادگی"
                    />
                  </InputGroup>

                  <InputGroup className="mb-2">
                    <FontAwesomeIcon icon="envelope" />
                    <TextBox
                      name="signUpEmail"
                      type="text"
                      placeholder="ایمیل"
                    />
                  </InputGroup>

                  <InputGroup className="mb-2">
                    <FontAwesomeIcon icon="eye" />
                    <TextBox
                      name="signUpPassword"
                      type="password"
                      placeholder="رمز عبور"
                    />
                  </InputGroup>

                  <InputGroup className="mb-2">
                    <FontAwesomeIcon icon="phone" />
                    <TextBox
                      name="signUpPhone"
                      type="text"
                      placeholder="شماره تلفن"
                    />
                  </InputGroup>

                  <InputGroup className="mb-2">
                    <FontAwesomeIcon icon="id-card" />
                    <TextBox
                      name="signUpNationalCode"
                      type="text"
                      placeholder="کد ملی"
                    />
                  </InputGroup>

                  <InputGroup className="mb-2">
                    <FontAwesomeIcon icon="calendar" />
                    <TextBox
                      name="signUpBirthDate"
                      type="text"
                      placeholder="تاریخ تولد"
                    />
                  </InputGroup>

                  <div as={Row} className="d-flex align-items-center mt-1 mb-2">
                    <Col lg={6} sm={6} className="text-end">
                      <CheckBox
                        name="checkRules"
                        checked={values.checkRules}
                        label="قوانین سایت را می پذیرم"
                      />
                    </Col>
                  </div>

                  <Col lg={12} className="mb-4">
                    <button type="submit" className="default-btn">
                      ثبت نام
                    </button>
                  </Col>
                </Form>
              )}
            </Formik>
          </Row>
          <Row>
            <Col lg={12} className="mb-4">
              <span>آیا قبلا ثبت نام کرده اید؟</span>
              <Link to="/login" className="sign-link">
                {" "}
                ورود به سایت{" "}
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

export default SignUp;
