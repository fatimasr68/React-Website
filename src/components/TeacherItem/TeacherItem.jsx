import React from "react";
import "./TeacherItem.css";
import { Card } from "react-bootstrap";

const TeacherItem = ({ teacher }) => {
  return (
    <>
      <Card className="teacher-item my-2 me-lg-3 p-0">
        <Card.Link href={`/teachers/teacher=${teacher._id}`}>
          <Card.Img src={teacher.teacherImage} varient="top" />
        </Card.Link>
        <Card.Body className="teacher-card-body px-4 pb-4">
          <Card.Title as="h3" className="mt-4 mb-3">
            {teacher.teacherName}
          </Card.Title>
          <div className="d-flex justify-content-between align-items-center pb-2">
            <Card.Subtitle>{teacher.teacherJob}</Card.Subtitle>
            <Card.Link href="{teacher.teacherTwitter}">
              <img
                src={require("../../assets/images/teacher_follow.png")}
                className="img-share"
              />
            </Card.Link>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default TeacherItem;
