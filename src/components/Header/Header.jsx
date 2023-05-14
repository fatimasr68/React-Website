import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { Col, Row, Nav, Navbar, NavDropdown, Offcanvas } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faBasketShopping,
} from "@fortawesome/free-solid-svg-icons";

import Login from "../Login/Login";

const Header = () => {
  const [menuOpen, toggleMenuOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    window.pageYOffset > 100 ? setSticky(true) : setSticky(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let classHide = isSticky ? "is-sticky" : "";

  return (
    <header className="header">
      <div className="top-header" variant="light">
        <div className="section-container">
          <Row className="align-items-center">
            <Col lg={3} md={4} sm={3}>
              <div className="top-header-right">
                <ul className="social-icons">
                  <li>
                    <a
                      href="https://www.twitter.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={9} md={8} sm={9}>
              <div className="top-header-left">
                <ul>
                  <li>
                    <span>info@alpha.com</span>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </li>
                  <li>
                    <span>0114222000</span>
                    <FontAwesomeIcon icon={faPhone} />
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div className={`navbar-area ${classHide}`}>
        <div className="section-container">
          <div className="header-navbar d-flex justify-content-between">
            {["lg"].map((expand) => (
              <Navbar
                key={expand}
                bg="white"
                expand={expand}
                className="mb-0 py-0"
              >
                {/* <Container fluid> */}
                <Navbar.Toggle
                  aria-controls={`offcanvasNavbar-expand-${expand}`}
                />
                <Link to="/">
                  <Navbar.Brand>
                    <img
                      alt=""
                      src={require("../../assets/images/logo.png")}
                      className="d-inline-block logo"
                    />{" "}
                    <span className="navbar-brand-text">آلفا</span>
                  </Navbar.Brand>
                </Link>

                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="end"
                  className="header-navbar"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title
                      id={`offcanvasNavbarLabel-expand-${expand}`}
                    >
                      <img
                        alt=""
                        src={require("../../assets/images/logo.png")}
                        className="d-inline-block logo"
                      />{" "}
                      <span className="navbar-brand-text">آلفا</span>
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="justify-content-start flex-grow-1 pe-2">
                      <Nav.Link as={Link} to="/">
                        خانه
                      </Nav.Link>
                      <Nav.Link as={Link} to="/">
                        درباره ما
                      </Nav.Link>
                      <Nav.Link as={Link} to="/">
                        خدمات
                      </Nav.Link>
                      <Nav.Link as={Link} to="/courseslist">
                        دوره ها
                      </Nav.Link>

                      <NavDropdown
                        onMouseEnter={() => {
                          toggleMenuOpen(true);
                        }}
                        onMouseLeave={() => {
                          toggleMenuOpen(false);
                        }}
                        show={menuOpen}
                        title="اخبار"
                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                      >
                        <NavDropdown.Item as={Link} to="/newslist">
                          اخبار
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/newslist">
                          مقالات
                        </NavDropdown.Item>
                        {/* <NavDropdown.Divider /> */}
                        <NavDropdown.Item as={Link} to="/newslist">
                          همه مطالب
                        </NavDropdown.Item>
                      </NavDropdown>

                      <Nav.Link as={Link} to="/">
                        تماس با ما
                      </Nav.Link>
                    </Nav>

                    {/* <Form.Control
                        type="search"
                        placeholder="جستجو ..."
                        className="me-2"
                        aria-label="Search"
                      />
                      <Button variant="outline-success">جستجو</Button> */}
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
                {/* </Container> */}
              </Navbar>
            ))}
            <Login />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
