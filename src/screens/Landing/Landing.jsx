import React from "react";
import "./Landing.css";
import "./BluePolygon.css";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import {
  Hero,
  Counter,
  Services,
  Categories,
  CoursesSlider,
  TeachersSlider,
  NewsSlider,
  Newsletter,
  DefaultButton,
} from "../../components/index";

const Landing = () => {
  return (
    <div className="py-30">
      <Hero />
      <Counter />

      <main>
        <div className="section-container services-area">
          <Container>
            <Row>
              <Col className="section-title">
                <h2>خدمات ما</h2>
                <p>تمام آنچه که نیاز دارید</p>
              </Col>
            </Row>

            <Row>
              <Col lg={6} md={12} sm={12}>
                <div className="services-right-section mb-5 ps-lg-5 p-sm-0">
                  <Row>
                    <Services />
                  </Row>
                </div>
              </Col>

              <Col
                lg={6}
                md={12}
                sm={12}
                className="services-left-section mb-5 p-sm-0 text-lg-start text-center"
              >
                <img
                  src={require("../../assets/images/hero-img2.jpg")}
                  varient="top"
                  alt="services"
                />
              </Col>
            </Row>
          </Container>
        </div>

        <div className="categories-area section-container">
          <Container>
            <Row>
              <Col className="section-title">
                <h2>دسته بندی ها</h2>
                <p>گستره وسیعی از موضوعات</p>
              </Col>
            </Row>
            <Row>
              <Col lg={12} className="text-lg-start text-sm-center text-center">
                <DefaultButton text={"مشاهده همه"} />
              </Col>
            </Row>
            <Row>
              <Categories />
            </Row>
          </Container>
        </div>

        <div className="features-polygon-widget">
          <div className="navy-blue-polygon-widget-bg">
            <div className="polygon-widget-inner">
              <Container>
                <Row>
                  <Col lg={3} md={4} sm={4} className="col-6">
                    <div className="item-box">
                      <img
                        src={require("../../assets/images/icon-online-education.png")}
                        width={69}
                        height={73}
                        className="icon"
                      />
                      <h3 className="text-right">امکان یادگیری آنلاین</h3>
                    </div>
                  </Col>
                  <Col lg={3} md={4} sm={4} col={6} className="col-6">
                    <div className="item-box">
                      <img
                        src={require("../../assets/images/icon-idea.png")}
                        className="icon"
                      />
                      <h3 className="text-right">
                        فرصت یادگیری از اساتید برتر
                      </h3>
                    </div>
                  </Col>
                  <Col lg={3} md={4} sm={4} col={6} className="col-6">
                    <div className="item-box">
                      <img
                        src={require("../../assets/images/icon-technology2.png")}
                        className="icon"
                      />
                      <h3 className="text-right">
                        یادگیری تکنولوژی های روز دنیا
                      </h3>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
            <div className="shape5">
              <img
                src={require("../../assets/images/shape5.png")}
                alt="Online Learning"
              />
            </div>
          </div>
        </div>

        <div className="courses-area section-container">
          <Container>
            <Row>
              <Col className="section-title">
                <h2>محبوب ترین دوره ها</h2>
                <p>محبوب ترین دوره های موجود</p>
              </Col>
            </Row>
            <Row>
              <Col lg={12} className="text-lg-start text-sm-center text-center">
                <Link to="/courseslist">
                  <DefaultButton text={"مشاهده همه"} />
                </Link>
              </Col>
            </Row>
            <Row>
              <CoursesSlider />
            </Row>
          </Container>
        </div>

        <div className="teaching-polygon-widget">
          <div className="light-blue-polygon-widget-bg">
            <div className="polygon-widget-inner">
              <Container>
                <Row className="align-items-center">
                  <Col lg={8} md={12}>
                    <div className="item-box">
                      <img
                        src={require("../../assets/images/icon-coaching.png")}
                        width="82"
                        className="icon"
                      />
                      <h2>همکاری در آموزش</h2>
                      <p>شما هم به جمع مدرسین آلفا بپیوندید!</p>
                    </div>
                  </Col>
                  <Col lg={4} md={12}>
                    <DefaultButton text={"شروع آموزش"} />
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>

        <div className="teachers-area section-container">
          <Container>
            <Row>
              <Col className="section-title">
                <h2>اساتید برتر</h2>
                <p>اساتید برجسته کشوری</p>
              </Col>
            </Row>
            <Row>
              <TeachersSlider />
            </Row>
          </Container>
        </div>

        <div className="news-area section-container">
          <Container>
            <Row>
              <Col className="section-title">
                <h2>اخبار و مقالات</h2>
                <p>جدیدترین اخبار و مقالات برنامه نویسی</p>
              </Col>
            </Row>
            <Row>
              <Col lg={12} className="text-lg-start text-sm-center text-center">
                <Link to="/newslist">
                  <DefaultButton text={"مشاهده همه"} />
                </Link>
              </Col>
            </Row>
            <Row>
              <div className="news-slider-area">
                <NewsSlider />
              </div>
            </Row>
          </Container>
        </div>

        <div className="register-polygon-widget">
          <div className="navy-blue-polygon-widget-bg">
            <div className="polygon-widget-inner">
              <Container>
                <Row className="align-items-center">
                  <Col lg={8} md={12}>
                    <div className="item-box">
                      <img
                        src={require("../../assets/images/icon-graduates.png")}
                        width="78"
                        className="icon"
                      />
                      <h2>دسترسی آسان به محتوای آموزشی</h2>
                      <p>همین حالا ثبت نام کن و دوره موردنظرت رو پیدا کن ...</p>
                    </div>
                  </Col>
                  <Col lg={4} md={12}>
                    <DefaultButton text={"ثبت نام رایگان"} />
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </main>
      <div className="section-container suggestion-area">
        <Container>
          <Row>
            <Col lg={6} md={12} sm={12}>
              <div className="suggestion-right-section mb-5 ps-lg-5 p-sm-0">
                <div className="suggestion-form">
                  <div className="top">
                    <h3>پیشنهادات و انتقادات</h3>
                  </div>
                  <form className="suggestion-form-content">
                    <Col className="text-center">
                      <Col lg={12}>
                        <input type="text" placeholder="ایمیل شما" />
                      </Col>
                      <Col lg={12}>
                        <input type="text" placeholder="عنوان پیام" />
                      </Col>
                      <Col lg={12}>
                        <input type="textarea" placeholder="متن پیام" />
                      </Col>
                      <Col lg={12}>
                        <button type="submit" className="default-btn">
                          ارسال پیشنهاد
                        </button>
                      </Col>
                    </Col>
                  </form>
                </div>
              </div>
            </Col>

            <Col
              lg={6}
              md={12}
              sm={12}
              className="suggestion-left-section mb-5 text-lg-start text-center"
            >
              <div className="play-btn-area">
                <a href="https://www.aparat.com/" className="play-btn">
                  <i className="fa fa-play"></i>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="newsletter-area section-container">
        <Newsletter />
      </div>
    </div>
  );
};

export default Landing;
