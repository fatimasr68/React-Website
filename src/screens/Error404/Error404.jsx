import React from "react";
import "./Error404.css";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { DefaultButton } from "../../components/index";

const Error404 = () => {
  return (
    <>
      <Container className="error-bg">
        <Row className="error-area text-center">
          <h1>
            4 <span>0</span> 4
          </h1>
          <h3>صفحه موردنظر یافت نشد!</h3>
          <p>مطمئن شوید آدرس را درست وارد کرده اید یا صفحه جابجا نشده است.</p>
          <Link to={"/"} className="mb-5">
            <DefaultButton text={"بازگشت به صفحه اصلی"} />
          </Link>
        </Row>
      </Container>
    </>
  );
};

export default Error404;
