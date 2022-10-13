import React, { useState, useEffect } from "react";
import "./CourseDetail.css";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartSimple,
  faCalendar,
  faClockRotateLeft,
  faPenToSquare,
  faUserGraduate,
  faUsers,
  faStar,
  faBook,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";
import { faChalkboardTeacher, faGraduationCap, faTags } from "@fortawesome/fontawesome-free-solid";
import { faIdCard } from "@fortawesome/free-regular-svg-icons";
import { Comment, CoursesSlider, DefaultButton } from "../../components";
import SocialShare from "../../components/common/SocialShare/SocialShare";



const CourseDetail = () => {

  const capacity = 60;
  const [likeIcon, setLikeIcon] = useState(false);
  const [likesCount, setLikeCount] = useState(85);

  const [dislikeIcon, setDislikeIcon] = useState(false);
  const [dislikesCount, setDislikeCount] = useState(3);

  const likeHandler = () => {
    if (likeIcon) {
      setLikeIcon(false);
      setLikeCount(likesCount - 1);
    } else {
      setLikeIcon(true);
      setLikeCount(likesCount + 1);

      dislikeIcon
        ? setDislikeCount(dislikesCount - 1) || setDislikeIcon(false)
        : setLikeIcon(true);
    }
  };

  const handleDislike = () => {
    if (dislikeIcon) {
      setDislikeIcon(false);
      setDislikeCount(dislikesCount - 1);
    } else {
      setDislikeIcon(true);
      setDislikeCount(dislikesCount + 1);

      likeIcon
        ? setLikeCount(likesCount - 1) || setLikeIcon(false)
        : setDislikeIcon(true);
    }
  };

  return (
    <>
      <div className="course-detail-area">
        <div className="courses-banner-bg inner-banner mb-3 pb-5">
          <Container>
            <Row>
              <Col lg={12} className="inner-title text-end">
                <h2>دوره جامع برنامه نویسی با جاوا اسکریپت</h2>
              </Col>
            </Row>
            <Row>
              <Col lg={8} sm={12} className="text-end">
                <div className="rating_reviews d-flex align-items-center mt-4">
                  <div className=" align-items-center rating">
                    <input type="radio" name="rating" value="5" id="5" />
                    <label htmlFor="5">☆</label>
                    <input type="radio" name="rating" value="4" id="4" />
                    <label htmlFor="4">☆</label>
                    <input type="radio" name="rating" value="3" id="3" />
                    <label htmlFor="3">☆</label>
                    <input type="radio" name="rating" value="2" id="2" />
                    <label htmlFor="2">☆</label>
                    <input type="radio" name="rating" value="1" id="1" />
                    <label htmlFor="1">☆</label>
                  </div>
                  <span>4.7</span>
                  <span>(32 امتیاز مدرس)</span>
                </div>

                <ul className="course-detail d-flex align-items-center mt-4">
                  <li className="d-flex align-items-center">
                    <img
                      src={require("../../assets/images/teacher-thumb-2.jpg")}
                      className="ms-2"
                    />
                    <span>مدرس: فاطمه صوری</span>
                  </li>

                  <li className="d-flex align-items-center">
                    <FontAwesomeIcon icon="video" className="icon me-5 ms-2" />
                    <span>17 جلسه</span>
                  </li>

                  <li className="d-flex align-items-center">
                    <FontAwesomeIcon icon="clock" className="icon me-5 ms-2" />
                    <span>5 ساعت و 45 دقیقه</span>
                  </li>
                </ul>
              </Col>
              <Col
                lg={4}
                sm={12}
                className="d-flex align-items-center justify-content-center"
              >
                <div className="dislike-box">
                  <img
                    width={40}
                    alt="course dislike"
                    onClick={handleDislike}
                    src={
                      dislikeIcon
                        ? require("../../assets/images/icon-dislike-active.png")
                        : require("../../assets/images/icon-dislike.png")
                    }
                  />
                  <span onClick={handleDislike}>{dislikesCount}</span>
                </div>
                <div className="like-box me-3 ">
                  <img
                    width={40}
                    alt="course like"
                    onClick={likeHandler}
                    className={`xx ${
                      likeIcon ? "heart-like" : "not-like"
                    } ms-1`}
                    src={
                      likeIcon
                        ? require("../../assets/images/icon-like-active.png")
                        : require("../../assets/images/icon-like.png")
                    }
                  />
                  <span onClick={likeHandler}>{likesCount}</span>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <Container>
          <Row>
            <Col lg={8} sm={12} className="course-description">
              <Row>
                <Col lg={12}>
                  <h2 className="mt-3 mb-4">دوره جامع آموزش جاوا اسکریپت</h2>
                  <p className="mb-4">
                    جاوا اسکریپت که به اختصار JS نیز نامیده می‌شود، یکی از
                    محبوبترین زبان‌های برنامه نویسی است. جاوا اسکریپت زبانی سطح
                    بالا، داینامیک، شی‌گرا و تفسیری است که از شیوه‌های مختلف
                    برنامه نویسی پشتیبانی می‌کند. از این زبان می‌توان برای
                    برنامه نویسی سمت سرور (Server Side)، اپلیکیشن‌های موبایل،
                    بازی و اپلیکیشن‌های دسکتاپ استفاده کرد. بنابراین می‌توان
                    اینگونه برداشت کرد که زبان برنامه نویسی جاوا اسکریپت، یک
                    زبان همه فن حریف است.
                  </p>
                  <p>
                    اگر با هر یک از این اصطلاحات آشنایی ندارید نگران نباشید،
                    زیرا در ادامه به توضیح هر یک از آن‌ها خواهیم پرداخت. برای
                    اینکه بهتر متوجه چیستی زبان جاوا اسکریپت شوید، در ابتدا باید
                    جواب سوالاتی مانند زبان کامپایلری چیست و چه تفاوتی با زبان
                    مفسری دارد؟، زبان برنامه نویسی سمت سرور و سمت کاربر به چه
                    نوع زبان‌هایی گفته می‌شود؟ را بدانید. پس از درک این مفاهیم
                    می‌توانید آموزش جاوا اسکریپت را شروع کنید.
                  </p>
                </Col>
              </Row>

              <Row>
                <Col lg={6} sm={12} className="">
                  <FontAwesomeIcon icon={faBook} />
                  <h3>پیش نیازهای دوره</h3>
                  <ul className="courses-details-list">
                    <li>آشنایی مقدماتی با جاوا اسکریپت</li>
                    <li>آشنایی با اصول برنامه نویسی</li>
                    <li>آشنایی با HTML و CSS</li>
                  </ul>
                </Col>
                <Col lg={6} sm={12}>
                  <FontAwesomeIcon icon={faGraduationCap} />
                  <h3>اهداف دوره</h3>
                  <ul className="courses-details-list">
                    <li>کسب مهارت در برنامه نویسی</li>
                    <li>دریافت مدرک معتبر</li>
                    <li>ورود به بازارکار</li>
                  </ul>
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
                  <FontAwesomeIcon icon={faTags} />
                    <h3>برچسب ها</h3>
                    <div className="tags">
                      <a>جاوا اسکریپت</a>
                      <a>فرانت اند</a>
                      <a>توسعه وب</a>
                      <a>طراحی سایت</a>
                      <a>ری اکت</a>
                      <a>برنامه نویسی وب</a>
                      <a>برنامه نویسی وب</a>
                      <a>برنامه نویسی وب</a>
                      <a>فرانت اند</a>
                    </div>
                </Col>
              </Row>
            </Col>
            <Col lg={4} sm={12}>
              <div className="course-detail-sidebar">
                <img
                  src={require("../../assets/images/course-javascript.jpg")}
                />
                <div className="sidebar-content">
                  <ul className="offer-box d-flex justify-content-between">
                    <li className="d-flex">
                      <FontAwesomeIcon
                        icon="tag"
                        className="ms-2"
                        color="#28B112"
                      />
                      <h4>500 هزار تومان</h4>
                    </li>
                    <li>
                      <h5>10% تخفیف</h5>
                    </li>
                  </ul>
                  <div className="price-box ">
                    <h6>550 هزار تومان</h6>
                  </div>

                  <ul>
                    <li>
                      <FontAwesomeIcon icon={faChartSimple} />
                      <span className="me-2 ms-1">سطح دوره:</span>
                      <span>متوسط</span>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faCalendar} />
                      <span className="me-2 ms-1">تاریخ شروع:</span>
                      <span>14 تیر 1401</span>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faClockRotateLeft} />
                      <span className="me-2 ms-1">آخرین بروزرسانی:</span>
                      <span>یک هفته پیش</span>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faPenToSquare} />
                      <span className="me-2 ms-1">وضعیت دوره:</span>
                      <span style={{ color: "#0ae" }}>در حال ثبت نام</span>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faUserGraduate} />
                      <span className="me-2 ms-1">تعداد ثبت نام:</span>
                      <span>60 دانشجو</span>
                    </li>
                    <li className="d-flex justify-content-between">
                      <FontAwesomeIcon icon={faUsers} />
                      <span className="me-2 ms-1">ظرفیت</span>
                      <ProgressBar now={capacity} label={`${capacity}%`} />
                    </li>
                  </ul>

                  <DefaultButton text="ثبت نام در دوره" />

                  <div className="post-share text-center">
                    <SocialShare />
                  </div>
                </div>
              </div>

              <div className="teacher-detail-sidebar">
                <ul className="d-flex justify-content-between">
                  <li className="d-flex">
                    <FontAwesomeIcon icon={faChalkboardTeacher} />
                    <h4 className="me-1">درباره مدرس</h4>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faStar} />
                    <span className="me-1">4.7 (98)</span>
                  </li>
                </ul>
                <ul className="d-flex justify-content-between align-items-center">
                  <li className="me-4">
                    <h6>فاطمه صوری</h6>
                    <p>کارشناس ارشد مهندسی کامپیوتر</p>
                    <p>برنامه نویس Full Stack</p>
                    <FontAwesomeIcon icon={faIdCard} />
                    <a className="me-1 mt-3" href="#">مشاهده رزومه</a>
                  </li>
                  <li>
                    <img
                      src={require("../../assets/images/teacher-1.jpg")}
                    />
                  </li>
                </ul>
              </div>
            </Col>
          </Row>

          <Row className="related-courses">
            <div>
              <FontAwesomeIcon icon={faLaptopCode} />
              <h3 className="me-1">دوره های مرتبط</h3>
            </div>
            <CoursesSlider />
          </Row>

          <Row>
            <Col lg={12} className="course-comment mt-5">
              <Comment />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default CourseDetail;
