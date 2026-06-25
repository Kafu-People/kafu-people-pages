import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ServiceMainFile from "./components/servicesComponents/ServiceMainFile";
import MainFile from "./components/trainingComponenets/MainFile";
import Loader from "./components/Loader";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Navbar/Header";
import Footer from "./components/Footer";
import ContactUs from "./pages/ContactUs";
import OurProducts from "./pages/OurProducts";
import PortfolioCaseStudy from "./pages/PortfolioCaseStudy";

import NewsAndEvents from "./pages/NewsAndEvents";
import News from "./pages/News";
import NewsArticle from "./pages/NewsArticle";
import Team from "./pages/Team";
import BlogSection from "./components/BlogSection/BlogSection";
import BlogPost from "./pages/BlogPost";

import Event from "./components/EventComponent/Event";

import ProductsCategories from "./components/ProductsCategories";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import { CookieConsentProvider } from "./context/CookieConsentProvider";
import FloatingWhatsApp from "./components/ui/FloatingWhatsApp";

const Signup = lazy(() => import("./components/admin/Signup"));
const Login = lazy(() => import("./components/admin/Login"));
const AdminDashboard = lazy(() => import("./components/admin/AdminDashboard"));
const Products = lazy(() => import("./components/admin/Products"));
const EventsLazy = lazy(() => import("./components/admin/Events"));
const RegistrationList = lazy(
  () => import("./components/admin/RegistrationList"),
);
const AddBlog = lazy(() => import("./components/admin/AddBlogs"));
const FileUpload = lazy(() => import("./components/admin/FileUpload"));
const VerifyUser = lazy(() => import("./components/admin/VerifyUser"));

const App = () => {
  return (
    <>
      <ScrollToTop />
      <CookieConsentProvider>
        <Header />
        <Routes>
          <Route
            path="/login"
            element={
              <Suspense fallback={<Loader />}>
                <Login />
              </Suspense>
            }
          />

          <Route
            path="/signup"
            element={
              <Suspense fallback={<Loader />}>
                <Signup />
              </Suspense>
            }
          />

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
          <Route
            path="/blogSection"
            element={<Navigate to="/blogs" replace />}
          />
          <Route path="/blog" element={<Navigate to="/blogs" replace />} />
          <Route path="/blogs" element={<BlogSection />} />
          <Route path="/blogs/:slug" element={<BlogPost />} />
          <Route path="/articles" element={<Navigate to="/blogs" replace />} />
          <Route
            path="/articles/:slug"
            element={<Navigate to="/blogs" replace />}
          />
          <Route path="/learn" element={<Navigate to="/blogs" replace />} />

          <Route path="/team" element={<Team />} />

          <Route path="/ProductsCategories" element={<ProductsCategories />} />

          <Route
            path="/admin"
            element={
              <Suspense fallback={<Loader />}>
                <AdminDashboard />
              </Suspense>
            }
          />

          <Route path="/training/ai" element={<MainFile />} />

          <Route
            path="/products"
            element={
              <Suspense fallback={<Loader />}>
                <Products />
              </Suspense>
            }
          />

          <Route
            path="/events"
            element={
              <Suspense fallback={<Loader />}>
                <EventsLazy />
              </Suspense>
            }
          />

          <Route
            path="/addBlog"
            element={
              <Suspense fallback={<Loader />}>
                <AddBlog />
              </Suspense>
            }
          />

          <Route
            path="/fileUpload"
            element={
              <Suspense fallback={<Loader />}>
                <FileUpload />
              </Suspense>
            }
          />

          <Route
            path="/verifyUser"
            element={
              <Suspense fallback={<Loader />}>
                <VerifyUser />
              </Suspense>
            }
          />

          <Route
            path="/registrationList"
            element={
              <Suspense fallback={<Loader />}>
                <RegistrationList />
              </Suspense>
            }
          />

          <Route
            path="*"
            element={
              <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-10">
                <h1 className="text-6xl font-bold text-gray-800 mb-2">
                  404 - NOT found
                </h1>
                <p className="text-xl text-gray-600 mb-6">
                  The page you are looking for does not exist.
                </p>
                <Link
                  to="https://kafupeople.com/"
                  className="text-xl text-white px-6 py-4 bg-blue-500 rounded-full hover:bg-blue-600 transition-colors">
                  Back to home
                </Link>
              </div>
            }
          />
        </Routes>
        <Footer />
        <FloatingWhatsApp />
      </CookieConsentProvider>
    </>
  );
};

export default App;
