import React from "react";
// import { Route, Routes } from "react-router-dom";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Index from "./Pages/Fashion1";
import Index2 from "./Pages/Fashion2";
import Index3 from "./Pages/Fashion3";
import Index4 from "./Pages/Electronic";
import Index6 from "./Pages/Kids";
import Index5 from "./Pages/Furniture";
import PGLS from "./Pages/PGLS";
import PGRS from "./Pages/PGRS";
import PGNS from "./Pages/PGNS";
import PGFW from "./Pages/PGFW";
import PLLS from "./Pages/PLLS";
import PLRS from "./Pages/PLRS";
import PLNS from "./Pages/PLNS";
import PLFW from "./Pages/PLFW";
import PLI from "./Pages/PLI";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PRI from "./Pages/PRI.js";
import ProductCard from "./Components/ProductCard";
import ProductCart from "./Pages/ProductCart";
import CheckOut from "./Pages/CheckOut";
import OrderComplete from "./Pages/OrderComplete";
import AboutUs from "./Pages/AboutUs";
import Faq from "./Pages/Faq";
import Login from "./Pages/Login";
import Login2 from "./Pages/Login2";
import SignUp from "./Pages/SignUp";
import ComingSoon from "./Pages/ComingSoon";
import ErrorPage from "./Pages/ErrorPage";
import PrivacyPage from "./Pages/PrivacyPage";
import TAndC from "./Pages/tAndC";
import Contatct from "./Pages/contact/Contatct";
import { useEffect } from "react";
import BlogCards from "./Pages/BlogCards";
import BlogsList1 from "./Pages/BlogsList1";
import BlogsList2 from "./Pages/BlogsList2";
import BlogSingle from "./Pages/BlogSingle";
import BackToTop from "./Components/BackToTop";
import { useState } from "react";

function App() {
  const location = useLocation();

  const isSpecialRoute =
    location.pathname.includes("maintenance") ||
    location.pathname.includes("coming-soon") ||
    location.pathname.includes("error-404");

  useEffect(() => {
    const handlePopstate = () => {
      window.location.reload(); // Refresh the page on popstate event (back button)
    };

    window.addEventListener("popstate", handlePopstate);

    return () => {
      window.removeEventListener("popstate", handlePopstate);
    };
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component mounts
  }, [location.pathname]);
  const [showModal, setShowModal] = useState(false);
  const [showGif, setShowGif] = useState(true);

  useEffect(() => {
    // Show the GIF for 3 seconds, then show the modal
    const timeout = setTimeout(() => {
      setShowGif(false);
      setShowModal(true);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    // Show the modal when the page refreshes or changes
    setShowModal(true);

    return () => {
      // Hide the modal when the component unmounts
      setShowModal(false);
    };
  }, [location.pathname]);
  const scrollbarStyle = `
  ::-webkit-scrollbar {
    display: none;
  }
`;
  return (
    <>
      <style>{scrollbarStyle}</style>
      {showGif && (
        <div id="ht-preloader">
          <div class="loader clear-loader">
            <img class="img-fluid" src="assets/images/loader.gif" alt="" />
          </div>
        </div>
      )}
      {showModal && (<>

        <div class="modal fade" id="mailchimpModal" tabindex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content" data-bg-img="assets/images/bg/08.png" style={{ backgroundImage: 'assets/images/bg/08.png' }}>
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body text-center">
                <div class="mb-4">
                  <h6 class="text-primary mb-1">
                    — Newsletter
                  </h6>
                  <h2 class="mb-0">Subscribe get notified!</h2>
                </div>
                <div class="subscribe-form">
                  <form id="mc-form1" class="row align-items-center no-gutters mb-3">
                    <div class="col">
                      <input value="" name="EMAIL" class="email form-control input-2 bg-white" id="mc-email1" placeholder="Email Address" required="" type="email" />
                    </div>
                    <div class="col-auto">
                      <input class="btn btn-primary overflow-auto" name="subscribe" value="Subscribe" type="submit" />
                    </div>
                  </form> <small>Get started for 1 Month free trial No Purchace required.</small>
                </div>
              </div>
            </div>
          </div>
        </div></>
      )}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {isSpecialRoute ? (<Routes>
        {/* <Route path="/maintenance" element={<Maintenance />} /> */}
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/error-404" element={<ErrorPage />} />
      </Routes>) : (<div className="page-wrapper"> <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/index2" element={<Index2 />} />
          <Route path="/index3" element={<Index3 />} />
          <Route path="/index4" element={<Index4 />} />
          <Route path="/index5" element={<Index5 />} />
          <Route path="/index6" element={<Index6 />} />
          <Route path="/shop-grid-left-sidebar" element={<PGLS />} />
          <Route path="/shop-grid-right-sidebar" element={<PGRS />} />
          <Route path="/shop-grid-no-sidebar" element={<PGNS />} />
          <Route path="/shop-grid-fullwidth" element={<PGFW />} />
          <Route path="/shop-list-left-sidebar" element={<PLLS />} />
          <Route path="/shop-list-right-sidebar" element={<PLRS />} />
          <Route path="/shop-list-no-sidebar" element={<PLNS />} />
          <Route path="/shop-list-fullwidth" element={<PLFW />} />
          <Route path="/product-left-image" element={<PLI />} />
          <Route path="/product-right-image" element={<PRI />} />
          <Route path="/product-cart" element={<ProductCart />} />
          <Route path="/product-checkout" element={<CheckOut />} />
          <Route path="/order-complete" element={<OrderComplete />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login-2" element={<Login2 />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/privacy-policy" element={<PrivacyPage />} />
          <Route path="/terms-and-conditions" element={<TAndC />} />
          <Route path="/blog-card" element={<BlogCards />} />
          <Route path="/blog-listing" element={<BlogsList1 />} />
          <Route path="/blog-listing-2" element={<BlogsList2 />} />
          <Route path="/blog-single" element={<BlogSingle />} />
          <Route path="/contact-us" element={<Contatct />} />

        </Routes>
        <Footer />

        <BackToTop />
      </div>)}

    </>
  );
}

export default App;
