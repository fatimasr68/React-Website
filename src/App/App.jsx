import React from "react";
import "./App.css";
import {
  HashRouter as Router, 
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import PageLayout from "../components/PageLayout";
import Landing from "../screens/Landing/Landing";
import Login from "../screens/Login/Login";
import SignUp from "../screens/SignUp/SignUp";
import ForgotPassword from "../screens/ForgotPassword/ForgotPassword";
import CoursesList from "../screens/CoursesList/CoursesList";
import CourseDetail from "../screens/CourseDetail/CourseDetail";
import NewsList from "../screens/NewsList/NewsList";
import NewsDetail from "../screens/NewsDetail/NewsDetail";
import Error404 from "../screens/Error404/Error404";
import StudentProfile from "../screens/StudentPanel/StudentProfile/StudentProfile";
import StudentCourses from "../screens/StudentPanel/StudentCourses/StudentCourses";
import AllCoursesList from "../screens/StudentPanel/AllCoursesList/AllCoursesList";
import UserDashboardLayout from "../screens/StudentPanel/UserDashboardLayout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index path="/" element={<Landing />} />
          <Route path="/courseslist" element={<CoursesList />} />
          <Route path="/newslist" element={<NewsList />} />
          <Route path="/newsdetail" element={<NewsDetail />} />
          <Route path="/coursedetail" element={<CourseDetail />} />
          {/* <Route path="/coursedetail/:id" element={<CourseDetail />} /> */}
        </Route>

        <Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/404" element={<Error404 />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Route>

        {/* User Panel Pages */}
        <Route path="/panel" element={<UserDashboardLayout />}>
          <Route path="/panel/profile" element={<StudentProfile />} />
          <Route path="/panel/student-courses" element={<StudentCourses />} />
          <Route path="/panel/courses-list" element={<AllCoursesList />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
