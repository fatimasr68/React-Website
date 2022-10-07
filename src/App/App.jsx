import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
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



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/courseslist" element={<CoursesList />} />
          <Route path="/newslist" element={<NewsList />} />
          <Route path="/newsdetail" element={<NewsDetail />} />
          <Route path="/coursedetail" element={<CourseDetail />} />
          {/* <Route path="/coursedetail/:id" element={<CourseDetail />} /> */}
          <Route path="/404" element={<Error404 />} />
          <Route path="*" element={<Navigate to="/404" replace />} />

          {/* User Panel Pages */}
          <Route path="/profile" element={<StudentProfile />} />
          <Route path="/student-courses" element={<StudentCourses />} />
          <Route path="/courses-list" element={<AllCoursesList />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
