import React from "react";
import "./NewsItem.css";
import { Card } from "react-bootstrap";
import { faShareAlt, faArrowLeft } from "@fortawesome/fontawesome-free-solid";
import { faCalendar, faComment } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const NewsItem = ({ news }) => {
  return (
    <>
      <Card className="news-item my-3 p-3">
        <div className="d-lg-flex d-sm-flex justify-content-between">
          <Link to="/newsdetail">
            <Card.Img className="w-sm-100" src={news.newsImage} width="100" />
          </Link>

          <Card.Body className="d-grid py-1">
            <div className="d-flex justify-content-between">
              <Link to="/newsdetail">
                <Card.Title as="h3" className="">
                  {news.newsTitle}
                </Card.Title>
              </Link>
              <Card.Text className="news-date">
                <FontAwesomeIcon icon={faCalendar} className="ms-1" />
                {news.newsDate}
              </Card.Text>
            </div>

            <Card.Text className="news-desc pt-3 pb-3">{news.newsDescription}</Card.Text>

            {/* <div
              className="mx-2 my-3"
              style={{ borderTop: "1px solid #F3F0F0" }}
            ></div> */}

            <div className="d-flex justify-content-between align-items-center">
              <Card.Text as="span">
                <FontAwesomeIcon icon={faShareAlt} className="ms-3 me-1" />
                <FontAwesomeIcon
                  icon={faComment}
                  className="ms-1"
                  color="#04BEFE"
                />
                {news.newsCommentCount}
              </Card.Text>
              <Card.Link href={`/news/news=${news._id}`}>
                <Card.Text as="span" className="mx-2 more">
                  بیشتر
                </Card.Text>
                <FontAwesomeIcon icon={faArrowLeft} className="more" />
              </Card.Link>
            </div>
          </Card.Body>
        </div>
      </Card>
    </>
  );
};

export default NewsItem;
