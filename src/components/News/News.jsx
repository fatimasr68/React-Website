import React from "react";
import { Col } from "react-bootstrap";
import newsData from "./newsData";
import {NewsItem} from "../index"

const News = () => {
  return (
    <>
      {newsData.map((item) => {
        return (
          <Col lg={6} md={12} sm={12} key={item._id}>
            <NewsItem news={item} />
          </Col>
        );
      })}
    </>
  );
};

export default News;
