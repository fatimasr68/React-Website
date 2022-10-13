import React from "react";
import "./StudentProfile.css";
import { Col, Form, InputGroup, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardUser } from "@fortawesome/free-solid-svg-icons";

export const StudentProfile = () => {
  return (
    <div className="student-profile-area">
      <h3 className="my-5">ویرایش پروفایل</h3>

      <Form className="edit-profile-form">
        <Row className="g-2 mb-3">
          <Col md>
            <InputGroup>
              <FontAwesomeIcon icon={faClipboardUser} />
              <Form.Control
                type="text"
                placeholder="نام"
                defaultValue="فاطمه"
              />
            </InputGroup>
          </Col>
          <Col md>
            <InputGroup>
              <FontAwesomeIcon icon={faClipboardUser} />
              <Form.Control
                type="text"
                placeholder="نام خانوادگی"
                defaultValue="صوری"
              />
            </InputGroup>
          </Col>
        </Row>

        <Row className="g-2 mb-3">
          <Col md>
            <InputGroup>
              <FontAwesomeIcon icon="user" />
              <Form.Control
                type="text"
                placeholder="نام کاربری"
                defaultValue="fateme.souri"
              />
            </InputGroup>
          </Col>
          <Col md>
            <InputGroup>
              <FontAwesomeIcon icon="eye" />
              <Form.Control
                type="password"
                placeholder="رمز عبور"
                defaultValue="12345678"
              />
            </InputGroup>
          </Col>
        </Row>

        <Row className="g-2 mb-3">
          <Col md>
            <InputGroup>
              <FontAwesomeIcon icon="envelope" />
              <Form.Control
                type="email"
                placeholder="ایمیل"
                defaultValue="fateme.souri@ut.ac.ir"
              />
            </InputGroup>
          </Col>
          <Col md>
            <InputGroup>
              <FontAwesomeIcon icon="phone" />
              <Form.Control
                type="text"
                placeholder="شماره تلفن"
                defaultValue="0910100010"
              />
            </InputGroup>
          </Col>
        </Row>

        <Row className="g-2 mb-3">
          <Col md>
            <InputGroup>
              <FontAwesomeIcon icon="id-card" />
              <Form.Control
                type="text"
                placeholder="کد ملی"
                defaultValue="12345678"
              />
            </InputGroup>
          </Col>
          <Col md>
            <InputGroup>
              <FontAwesomeIcon icon="calendar" />
              <Form.Control type="text" placeholder="تاریخ تولد" />
            </InputGroup>
          </Col>
        </Row>

        <Row>
          <Col lg={12} className="mb-4">
            <button type="reset" className="default-btn red-button  ms-2">
              لغو تغییرات
            </button>
            <button type="submit" className="default-btn">
              ثبت تغییرات
            </button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default StudentProfile;
