import React from "react";
import PanelSidebar from "../../components/PanelSidebar/PanelSidebar";
import { Outlet, useLocation } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

const UserDashboardLayout = () => {
  const location = useLocation();

  return (
    <div className="user-panel">
      <Row>
        <Col lg={3} md={3} sm={12}>
          <div className={`panel-sidebar-area ${
                      location.pathname === "/panel" ? "dashboard-activated" :
                      location.pathname === "/panel/profile" ? "profile-activated" :
                      location.pathname === "/panel/student-courses" ? "student-courses-activated" :
                      location.pathname === "/panel/courses-list" ? "all-courses-activated" : "" } `
                    }>
            <PanelSidebar />
          </div>
        </Col>
        <Col lg={9} md={9} sm={12}>
          <Outlet />
        </Col>
      </Row>
    </div>
  );
};

export default UserDashboardLayout;
