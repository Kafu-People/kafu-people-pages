import React, { useEffect, useState, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ServiceMainFile from "./components/servicesComponents/ServiceMainFile";
import MainFile from "./components/trainingComponenets/MainFile";
import Loader from "./components/Loader";
// import Services from "./pages/Services";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Navbar/Header";
import Footer from "./components/Footer";
import ContactUs from "./pages/ContactUs";
import OurProducts from "./pages/OurProducts";
import PortfolioCaseStudy from "./pages/PortfolioCaseStudy";

import NewsAndEvents from "./pages/NewsAndEvents";
import News from "./pages/News";
import NewsArticle from "./pages/NewsArticle";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import Team from "./pages/Team";
import BlogSection from "./components/BlogSection/BlogSection";
import BlogPost from "./pages/BlogPost";

import Event from "./components/EventComponent/Event";
// import Enroll from "./pages/Enroll";

// admin routes are lazy loaded
const Signup = lazy(() => import("./components/admin/Signup"));
const Login = lazy(() => import("./components/admin/Login"));

const AdminDashboard = lazy(() => import("./components/admin/AdminDashboard"));
import ProductsCategories from "./components/ProductsCategories";

const Products = lazy(() => import("./components/admin/Products"));
const Events = lazy(() => import("./components/admin/Events"));
const RegistrationList = lazy(() => import("./components/admin/RegistrationList"));
const AddBlog = lazy(() => import("./components/admin/AddBlogs"));
const FileUpload = lazy(() => import("./components/admin/FileUpload"));
const VerifyUser = lazy(() => import("./components/admin/VerifyUser"));
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import { CookieConsentProvider } from "./context/CookieConsentProvider";
import FloatingWhatsApp from "./components/ui/FloatingWhatsApp";

const App = () => {

  return (
    <Router>
      <ScrollToTop />
      <CookieConsentProvider>
        <Header />
        <Routes>

        {/* login page for admin lazy loaded with suspense */}
        <Route path="/login" element={
          <Suspense fallback={<Loader />}>
            <Login />
          </Suspense>
          } />
          
        {/* signup page for admin lazy loaded with suspense */}
        <Route path="/signup" element={
          <Suspense fallback={<Loader />}>
              <Signup />
            </Suspense>
          }/>

        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/portfolio" element={<OurProducts />} />
        <Route path="/portfolio/:slug" element={<PortfolioCaseStudy />} />
        <Route path="/services" element={<ServiceMainFile />} />

        <Route path="/news" element={<News />} />
        <Route path="/news/:slug" element={<NewsArticle />} />
        <Route path="/newsAndEvents" element={<NewsAndEvents />} />
        <Route path="/event/:id" element={<Event />} />
        {/* <Route path="/enroll" element={<Enroll />} /> */}
        <Route path="/blogSection" element={<Navigate to="/blogs" replace />} />
        <Route path="/blog" element={<Navigate to="/blogs" replace />} />
        <Route path="/blogs" element={<BlogSection />} />
        <Route path="/blogs/:slug" element={<BlogPost />} />

        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:slug" element={<Article />} />
        <Route path="/learn" element={<Navigate to="/articles" replace />} />

        <Route path="/team" element={<Team />} />

        <Route path="/ProductsCategories" element={<ProductsCategories />} />


        {/* admin page lazy loaded with suspense */}
        <Route path="/admin" element={
          <Suspense fallback={<Loader />}>
            <AdminDashboard />
          </Suspense>
          } />



        <Route path="/training/ai" element={<MainFile />} />



        {/* products page for admin lazy loaded with suspense */}
        <Route path="/products" element={
          <Suspense fallback={<Loader />}>
            <Products />
          </Suspense>
          } />

        {/* event page for admin lazy loaded with suspense */}
        <Route path="/events" element={
          <Suspense fallback={<Loader />}>
            <Events />
          </Suspense>
          } />

        {/* addblog page for admin lazy loaded with suspense */}
        <Route path="/addBlog" element={
          <Suspense fallback={<Loader />}>
            <AddBlog />
          </Suspense>
          } />

        {/* fileupload page for admin lazy loaded with suspense */}
        <Route path="/fileUpload" element={
          <Suspense fallback={<Loader />}>
            <FileUpload />
          </Suspense>
          } />

        {/* verifyuser page for admin lazy loaded with suspense */}
        <Route path="/verifyUser" element={
          <Suspense fallback={<Loader />}>
            <VerifyUser />
          </Suspense>
          } />

        {/* registrationlist page for admin lazy loaded with suspense */}
        <Route path="/registrationList" element={
          <Suspense fallback={<Loader />}>
            <RegistrationList />
          </Suspense>
          } />

        </Routes>
        <Footer />
        <FloatingWhatsApp />
      </CookieConsentProvider>
    </Router>
  );
};

export default App;
