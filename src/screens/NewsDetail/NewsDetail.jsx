import React from "react";
import "./NewsDetail.css";
import {
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  Image,
  Card,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { faCalendar, faComment } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { Comment, SocialShare } from "../../components/index";



const NewsDetail = () => {
  return (
    <>
      <div className="news-detail-area">
        <div className="news-banner-bg inner-banner mb-4">
          <Container className="news-detail">
            <Row>
              <Col className="inner-title text-end">
                <h2>کاربرد کتابخانه ری اکت در برنامه نویسی چیست؟</h2>
              </Col>
            </Row>
            <Row>
              <Col className="d-flex pt-4">
                <FontAwesomeIcon icon="user" className="icon" />
                <span>مقاله</span>
                <FontAwesomeIcon icon="calendar" className="icon me-5" />
                <span>10 تیر 1401</span>
              </Col>
            </Row>
            <Row>
              <Col className="d-flex pt-4">
                <FontAwesomeIcon icon="user" className="icon" />
                <span>نویسنده: فاطمه صوری</span>
              </Col>
            </Row>
          </Container>
        </div>

        <Container>
          <Row>
            {/* region Sidebar */}
            <Col lg={4} className="news-page-sidebar">
              <InputGroup className="search-box mb-3">
                <InputGroup.Text>
                  <FontAwesomeIcon icon="search" color="#1ABBFF" />
                </InputGroup.Text>
                <Form.Control
                  placeholder="جستجو ..."
                  aria-label=""
                  aria-describedby="newsSearch"
                />
              </InputGroup>

              <div className="sidebar-widget">
                <h3>پربازدیدها</h3>
                <Card className="news-item my-3 p-2">
                  <div className="d-lg-flex d-sm-flex justify-content-between align-items-center">
                    <Link to="/newsdetail">
                      <Card.Img
                        className="w-sm-100"
                        src={require("../../assets/images/news-1.jpg")}
                        width="30"
                      />
                    </Link>
                    <Card.Body className="ps-0 pe-3 py-1">
                      <div className="d-flex justify-content-between">
                        <Card.Text className="news-date">
                          <FontAwesomeIcon icon={faCalendar} className="ms-1" />
                          10 تیر 1401
                        </Card.Text>
                        <Card.Text as="span">
                          <FontAwesomeIcon
                            icon={faComment}
                            className="ms-1"
                            color="#04BEFE"
                          />
                          15
                          <FontAwesomeIcon icon={faShareAlt} className="me-3" />
                        </Card.Text>
                      </div>
                      <Link to="/newsdetail">
                        <Card.Title as="h3" className="mt-3">
                          برگزاری کارگاه آموزش پروژه محور React در آموزشگاه آلفا
                        </Card.Title>
                      </Link>
                    </Card.Body>
                  </div>
                </Card>
                <Card className="news-item my-3 p-2">
                  <div className="d-lg-flex d-sm-flex justify-content-between align-items-center">
                    <Link to="/newsdetail">
                      <Card.Img
                        className="w-sm-100"
                        src={require("../../assets/images/news-2.jpg")}
                        width="30"
                      />
                    </Link>
                    <Card.Body className="ps-0 pe-3 py-1">
                      <div className="d-flex justify-content-between">
                        <Card.Text className="news-date">
                          <FontAwesomeIcon icon={faCalendar} className="ms-1" />
                          10 تیر 1401
                        </Card.Text>
                        <Card.Text as="span">
                          <FontAwesomeIcon
                            icon={faComment}
                            className="ms-1"
                            color="#04BEFE"
                          />
                          15
                          <FontAwesomeIcon icon={faShareAlt} className="me-3" />
                        </Card.Text>
                      </div>
                      <Link to="/newsdetail">
                        <Card.Title as="h3" className="mt-3">
                          برگزاری کارگاه آموزش پروژه محور ASP.NET در آموزشگاه
                          آلفا{" "}
                        </Card.Title>
                      </Link>
                    </Card.Body>
                  </div>
                </Card>
                <Card className="news-item my-3 p-2">
                  <div className="d-lg-flex d-sm-flex justify-content-between align-items-center">
                    <Link to="/newsdetail">
                      <Card.Img
                        className="w-sm-100"
                        src={require("../../assets/images/news-3.jpg")}
                        width="30"
                      />
                    </Link>
                    <Card.Body className="ps-0 pe-3 py-1">
                      <div className="d-flex justify-content-between">
                        <Card.Text className="news-date">
                          <FontAwesomeIcon icon={faCalendar} className="ms-1" />
                          10 تیر 1401
                        </Card.Text>
                        <Card.Text as="span">
                          <FontAwesomeIcon
                            icon={faComment}
                            className="ms-1"
                            color="#04BEFE"
                          />
                          15
                          <FontAwesomeIcon icon={faShareAlt} className="me-3" />
                        </Card.Text>
                      </div>
                      <Link to="/newsdetail">
                        <Card.Title as="h3" className="mt-3">
                          برگزاری کارگاه آموزش پروژه محور #C در آموزشگاه آلفا{" "}
                        </Card.Title>
                      </Link>
                    </Card.Body>
                  </div>
                </Card>
              </div>

              <div className="sidebar-widget">
                <h3>دسته بندی ها</h3>
                <Form>
                  <ul>
                    <li className="d-flex justify-content-between align-items-center">
                      {/* <FontAwesomeIcon icon="check" /> */}
                      <Link to={"/newslist"}>اخبار</Link>
                      <span className="category-count">25</span>
                    </li>
                    <li className="d-flex justify-content-between align-items-center">
                      <Link to={"/newslist"}>مقالات</Link>
                      <span className="category-count">25</span>
                    </li>
                    <li className="d-flex justify-content-between align-items-center">
                      <Link to={"/newslist"}>رویدادها</Link>
                      <span className="category-count">25</span>
                    </li>
                  </ul>
                </Form>
              </div>

              <div className="sidebar-widget news-tag">
                <h3>برچسب ها</h3>
                <Link to={"/"}>جاوا اسکریپت</Link>
                <Link to={"/"}>فرانت اند</Link>
                <Link to={"/"}>بکند</Link>
                <Link to={"/"}>برنامه نویسی وب</Link>
                <Link to={"/"}>طراحی سایت</Link>
                <Link to={"/"}>کارگاه آموزشی</Link>
              </div>
            </Col>

            {/* region News Content */}
            <Col lg={8} className="news-content">
              <Row>
                <Col lg={12}>
                  <Image src={require("../../assets/images/news-1.jpg")} />
                </Col>

                <Col lg={12}>
                  <p>
                    React js یکی از کتابخانه های جاوا اسکریپت است که open source
                    است. برنامه نویسان فرانت اند برای ساخت ui و صفحات وب
                    اپلیکیشن های تک صفحه ای استفاده می کنند. قبل از یادگیری
                    react شما باید حداقل آشنایی لازم را با جاوا اسکریپت داشته
                    باشید. پویایی المنت های صفحات وب به خاطر استفاده از جاوا
                    اسکریپت و یا کتابخانه های آن است. کتابخانه های javascript
                    کدهای آماده ای هستند که با جاوا اسکریپت توسعه داده شده اند.
                  </p>

                  <p>
                    و برنامه نویسیان بیشتر از کتابخانه های زبان جاوا اسکریپت
                    استفاده می کنند. به این دلیل که کد ها آماده هستند و برنامه
                    نوشتن با آن سریعتر پیش می رود. کد های آماده شامل کامپوننت
                    های آماده، توابع و الگوهای از پیش تعیین شده هستند. کتابخانه
                    ری اکت در زمینه مدیریت لایه در وب سایت نیز استفاده های بسیار
                    زیادی را پوشش می دهد. همچنین ری اکت این امکان را در اختیار
                    کاربر قرار می‌دهد تا کامپوننت هایی که با استفاده از آن می
                    توان قابلیت استفاده مجدد را در رابطه کاربری ایجاد نمود تهیه
                    نماییم.
                  </p>

                  <p>
                    کتابخانه ری اکت در زمینه مدیریت لایه در وب سایت نیز استفاده
                    های بسیار زیادی را پوشش می دهد. همچنین ری اکت این امکان را
                    در اختیار کاربر قرار می‌دهد تا کامپوننت هایی که با استفاده
                    از آن می توان قابلیت استفاده مجدد را در رابطه کاربری ایجاد
                    نمود تهیه نماییم.
                  </p>

                  <p>
                    تاریخچه پیدایش reactjs به سال ۲۰۱۱ باز می گردد که فردی به
                    نام جردن و بالک به عنوان یکی از مهندسین ارشد که در شرکت فیس
                    بوک در حال فعالیت بود آن را معرفی کرده و در نهایت این
                    کتابخانه در سال ۲۰۱۲ در اپلیکیشن اجتماعی بسیار معروف
                    اینستاگرام مورد استفاده قرار گرفت.
                  </p>
                </Col>

                <Col className="d-flex justify-content-between align-items-top mb-5">
                  <div className="news-tag">
                    <FontAwesomeIcon icon="tags" className="icon ms-2" />
                    <Link to={"/"}>فرانت اند</Link>
                    <Link to={"/"}>JSX</Link>
                    <Link to={"/"}>برنامه نویسی وب</Link>
                  </div>
                  <div className="news-share">
                    <SocialShare />
                  </div>
                </Col>
                <Col lg={12} className="news-comment">
                  <Comment />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default NewsDetail;
