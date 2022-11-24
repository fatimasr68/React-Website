import React, { useState } from "react";
import "./NewsList.css";
import newsData from "../../components/News/newsData";
import {
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  FormSelect,
} from "react-bootstrap";
import { News, NewsItem } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";

const NewsList = () => {
  const [newsDataa, setNewsData] = useState(newsData);
  const [newsDataCount, setNewsDataCount] = useState(newsData.length);
  const [newsFilteredData, setNewsFilteredData] = useState(newsData);

  const filterNewsCategories = (e) => {
    if (e.target.value === "all") {
      setNewsFilteredData(newsDataa);
      setNewsDataCount(newsDataa.length);
    } else {
      const filteredNews = newsDataa.filter((news) =>
        news.newsCategory.includes(e.target.value)
      );
      setNewsFilteredData(filteredNews);
      setNewsDataCount(filteredNews.length);
    }
  };

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

                    <FormSelect
                      className="d-inline mx-2"
                      placeholder="انتخاب دسته بندی"
                      onChange={filterNewsCategories}
                    >
                      <option value="all">همه مطالب</option>
                      <option value="news">اخبار</option>
                      <option value="article">مقالات</option>
                      <option value="event">رویدادها</option>
                    </FormSelect>
                  </Col>

                  <Col
                    lg={7}
                    sm={12}
                    className="d-flex align-items-center justify-content-end grid-show"
                  >
                    {/* <FontAwesomeIcon
                      icon={faList}
                      className="ms-2"
                      color="#777"
                    />
                    <FontAwesomeIcon icon={faGrip} color="#1ABBFF" /> */}
                    <span className="item-count">{newsDataCount} مطلب</span>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <Row>
            {newsFilteredData.map((item) => {
              return (
                <Col lg={6} md={12} sm={12} key={item._id}>
                  <NewsItem news={item} />
                </Col>
              );
            })}
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
