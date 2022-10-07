import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";

const PageLayout = () => {
  const location = useLocation();
  
  return (
    <>
      <header className="header-bg">
        {location.pathname === "/login" ? null :
         location.pathname === "/signup" ? null : 
         location.pathname === "/forgotpassword" ? null : 
         location.pathname === "/404" ? null :
         location.pathname === "/profile" ? null :
         location.pathname === "/student-courses" ? null :
         location.pathname === "/courses-list" ? null :
        <Header />
        }
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        {location.pathname === "/login" ? null :
         location.pathname === "/signup" ? null : 
         location.pathname === "/forgotpassword" ? null : 
         location.pathname === "/404" ? null :
         location.pathname === "/profile" ? null :
         location.pathname === "/student-courses" ? null :
         location.pathname === "/courses-list" ? null :
        <Footer />
        }
      </footer>
    </>
  );
};

export default PageLayout;
