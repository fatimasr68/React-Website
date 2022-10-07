import React, { useState } from "react";
import "./Footer.css";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  const [latitude, setLatitude] = useState(35.6892);
  const [longitude, setLongitude] = useState(51.389);
  const [zoom, setZoom] = useState(1);

  return (
    <>
      <div className="footer-area">
        <Container>
          <Row>
            <Col lg={4} sm={12}>
              <div className="footer-widget">
                <div className="footer-logo">
                  <a href="index.html">
                    <img
                      src={require("../../assets/images/logo2.png")}
                      alt="logo"
                    />
                    <span>آلفا</span>
                  </a>
                </div>
                <p className="px-3">
                  آموزشگاه آلفا با هدف تولید و انتشار محتوای با کیفیت آموزشی و
                  همچنین آشنایی جامعه با فضای کسب و کار در فضای مجازی ایجاد شده
                  و امید داریم بتوانیم با راهکارهای نوین و استفاده از پتانسیل
                  فضای مجازی ایجاد فرصت کنیم برای افرادی که خواهان پیشرفت خود و
                  کشورشان هستند.
                </p>
                <ul className="social-link d-flex align-items-center pe-3 pt-3">
                  <li className="social-title">ما را دنبال کنید:</li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/" target="_blank">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={4} sm={12}>
              <div className="footer-widget pe-3 me-lg-5">
                <h3>درباره ما</h3>
                <ul className="footer-list">
                  <li>
                    <a href="/">خدمات ما</a>
                  </li>
                  <li>
                    <a href="/">همکاری با ما</a>
                  </li>
                  <li>
                    <a href="/">سوالات متداول</a>
                  </li>
                  <li>
                    <a href="/">قوانین و مقررات</a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={4} sm={12}>
              <div className="footer-widget pe-3 me-lg-2">
                <h3>تماس با ما</h3>
                <ul className="footer-contact">
                  <li>
                    <div className="content">
                      <i className="fa fa-sharp fa-envelope"></i>
                      <a href="mailto:info@alpha.com" className="email">
                        info@alpha.com
                      </a>
                    </div>
                  </li>

                  <li className="mb-0">
                    <div className="content">
                      <i className="fa fa-phone"></i>
                      <a href="tel:0114222000" className="phone">011 - 422 2000</a>
                    </div>
                  </li>

                  {/* <li>
                  <i className="fa fa-map"></i>
                  <div className="content">
                    <h4>ساری، بلوار خزر</h4>
                  </div>
                </li> */}

                  <li className="p-0">
                    <div className="footer-map">
                      <div className="footer-map-bg-shape">
                        <img
                          src={require("../../assets/images/bg-map-1.png")}
                          varient="top"
                          alt="map bg"
                        />
                      </div>
                      {/* <img
                      src={require("../../assets/images/map.jpg")}
                      varient="top"
                      alt="location"
                    /> */}
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d367.1726492140088!2d53.064837386477734!3d36.596601339770544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f85153d25151bb1%3A0x5921d2b89dbea45e!2z2YXYsdqp2LIg2K7YsduM2K8g2K_ZhtuM2KfbjCDYotix2LLZiA!5e0!3m2!1sfa!2s!4v1658501889958!5m2!1sfa!2s"
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="copyright-area">
          <Container>
            <div className="copy-right-text text-center">
              <p>
                <span>
                  تمامی حقوق این سایت متعلق به <b>آلفا</b> می باشد{" "}
                </span>
                Copyright @
                <script>document.write(new Date().getFullYear())</script>2022{" "}
              </p>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Footer;
