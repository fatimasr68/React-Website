import React from "react";
import "./NewsList.css";
import {
  Container,
  Row,
  Col,
  Dropdown,
  Form,
  InputGroup,
} from "react-bootstrap";
import { News } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGrip, faList, faNewspaper } from "@fortawesome/free-solid-svg-icons";


const NewsList = () => {
  return (
    <>
      <div className="news-list-area">
        <div className="news-banner-bg inner-banner mb-3">
          <Container>
            <Row>
              <Col className="inner-title text-center">
                <FontAwesomeIcon icon={faNewspaper} />
                <h2>اخبار و مقالات</h2>
              </Col>
            </Row>
          </Container>
        </div>
        <Container>
          <Row>
            <Col>
              <div className="search-header px-3 py-2">
                <Row>
                  <Col
                    lg={5}
                    sm={12}
                    className="d-flex align-items-center justify-content-end"
                  >
                    <InputGroup className="search-box">
                      <InputGroup.Text id="newsSearch">
                        <FontAwesomeIcon icon="search" color="#1ABBFF" />
                      </InputGroup.Text>
                      <Form.Control
                        placeholder="جستجو ..."
                        aria-label=""
                        aria-describedby="newsSearch"
                      />
                    </InputGroup>

                    <Dropdown className="d-inline mx-2">
                      <Dropdown.Toggle id="dropdown-autoclose-true">
                        انتخاب دسته بندی
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#">اخبار</Dropdown.Item>
                        <Dropdown.Item href="#">مقالات</Dropdown.Item>
                        <Dropdown.Item href="#">رویدادها</Dropdown.Item>
                        <Dropdown.Item href="#">همه</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Col>

                  <Col
                    lg={7}
                    sm={12}
                    className="d-flex align-items-center justify-content-end grid-show"
                  >
                    <FontAwesomeIcon
                      icon={faList}
                      className="ms-2"
                      color="#777"
                    />
                    <FontAwesomeIcon icon={faGrip} color="#1ABBFF" />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <Row>
            <News />
          </Row>
        </Container>

        <Container>
          <Row>
            <Col lg={12}>
              <div className="pagination mt-2 mb-5"></div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default NewsList;
