import React from "react";
import "./NewsItem.css";
import { Card } from "react-bootstrap";
import { faShareAlt, faArrowLeft } from "@fortawesome/fontawesome-free-solid";
import { faCalendar, faComment } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {stringShorter} from "../../core/utils/stringShorter";


// const stringShorter = (text, size) => {
//   let newString = text && text.length > 40 ? text.slice(0, size) + "..." : text;
//   return newString;
// };

const NewsItem = ({ news }) => {
  return (
    <>
      <Card className="news-item my-3 p-3">
        <article className="d-lg-flex d-sm-flex justify-content-between">
          <Link to={`/news/${news._id}`}>
            <Card.Img className="w-sm-100" src={news.newsImage} width="100" />
          </Link>

          <Card.Body className="d-grid py-1">
            <header className="d-flex justify-content-between">
              <Link to={`/news/${news._id}`}>
                <Card.Title as="h3" className="">
                  {stringShorter(news.newsTitle, 30)}  
                </Card.Title>
              </Link>
              <Card.Text className="news-date">
                <FontAwesomeIcon icon={faCalendar} className="ms-1" />
                {news.newsDate}
              </Card.Text>
            </header>

            <Card.Text className="news-desc pt-3 pb-3">
              {stringShorter(news.newsDescription, 80)}
            </Card.Text>

            <footer className="d-flex justify-content-between align-items-center">
              <Card.Text as="span">
                <FontAwesomeIcon icon={faShareAlt} className="ms-3 me-1" />
                <FontAwesomeIcon
                  icon={faComment}
                  className="ms-1"
                  color="#04BEFE"
                />
                {news.newsCommentCount}
              </Card.Text>
              <Link to={`/news/${news._id}`}>
                <Card.Text as="span" className="mx-2 more">
                  بیشتر
                </Card.Text>
                <FontAwesomeIcon icon={faArrowLeft} className="more" />
              </Link>
            </footer>
          </Card.Body>
        </article>
      </Card>
    </>
  );
};

export default NewsItem;
