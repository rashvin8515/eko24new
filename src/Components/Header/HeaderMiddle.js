import React from "react";
import { Link } from "react-router-dom";

export default function HeaderMiddle(props) {
  const { options } = props;

  return (
    <>
      <div class="py-md-3 py-2">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-6 d-none d-md-flex align-items-center">
              {/* <a class="navbar-brand logo d-none d-lg-block" href="index.html">
                <img class="img-fluid" src="assets/images/logo.png" alt="" />
              </a> */}
              <Link class="navbar-brand logo d-none d-lg-block" to="/">
                <img class="img-fluid" src="assets/images/logo.png" alt="" />
              </Link>
              <div class="media ml-lg-11">
                <i class="las la-mobile-alt ic-2x bg-white rounded p-2 shadow-sm mr-2 text-primary"></i>
                <div class="media-body">
                  <span class="mb-0 d-block">Call Us</span>
                  <a class="text-muted" href="tel:+912345678900">
                    +91-234-567-8900
                  </a>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="right-nav align-items-center d-flex justify-content-end">
                <form class="form-inline border rounded w-100">
                  <select class="custom-select border-0 rounded-0 bg-light form-control d-none d-lg-inline">
                    {options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <input
                    class="form-control border-0 border-left col"
                    type="search"
                    placeholder="Enter Your Keyword"
                    aria-label="Search"
                  />
                  <button
                    class="btn btn-primary text-white col-auto"
                    type="submit"
                  >
                    <i class="las la-search"></i>
                  </button>
                </form>
              </div>
            </div>
            {/* <!--menu end--> */}
          </div>
        </div>
      </div>
    </>
  );
}
