import React from "react";
import "./Hero.css";
import heroSliderData from "./heroSliderData";
import Carousel from "react-bootstrap/Carousel";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Hero = (slide) => {
  return (
    <div>
      <div className="section-container hero-area">
        <div className="hero-slider-area">
          <Carousel variant="dark">
            {heroSliderData.map((slide) => {
              return (
                <Carousel.Item interval={3000} key={slide._id}>
                  <Row>
                    <Col lg={6} md={6} sm={12}>
                      <Carousel.Caption>
                        <div className="hero-slider-content">
                          <h1>{slide.title}</h1>
                          <h3>{slide.subtitle}</h3>
                          <p>{slide.description}</p>
                          <div className="search-box">
                            <input type="text" className="input-search" placeholder="امروز چی میخوای یاد بگیری؟" />
                            <button type="submit">
                              جستجوی دوره
                              <FontAwesomeIcon icon={faSearch} />
                            </button>
                          </div>
                        </div>
                      </Carousel.Caption>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                      <div className="hero-slider-img">
                        <img
                          src={slide.image}
                          varient="top"
                          alt={slide.altText}
                        />
                        <div className="hero-slider-bg-shape">
                          <img
                            src={require("../../assets/images/bg-shape1.png")}
                            varient="top"
                            alt="slide bg"
                          />
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Hero;
