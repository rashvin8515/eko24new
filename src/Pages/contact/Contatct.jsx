import React from "react";
import Page_Heading from "../../Components/PageHeading/PageHeading";
import { Col, Container, Row } from "reactstrap";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import MapSection from "./MapSection";

function Contatct() {
  const firstBreadcrumb = { label: "Pages", link: "/contact-us" };
  const secondBreadcrumb = {
    label: "Contatct Us",
    link: "/contact-us",
    active: true,
  };
  const contactInfo = [
    {
      region: "North America",
      address: "423B, Road Worldwide Country, USA",
      phone: "+91-234-567-8900",
      email: "themeht23@gmail.com",
    },
    {
      region: "United Kingdom",
      address: "423B, Road Worldwide Country, USA",
      phone: "+91-234-567-8900",
      email: "themeht23@gmail.com",
    },
  ];
  return (
    <div className="page-wrapper">
      <Page_Heading
        title="Contact Us"
        firstBreadcrumb={firstBreadcrumb}
        secondBreadcrumb={secondBreadcrumb}
      />
      <section>
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-8">
              <div className="mb-5">
                <h6 className="text-primary mb-1">— Contact US</h6>
                <h2 className="mb-0">We’d love to hear from you.</h2>
              </div>
              <form id="contact-form" className="row" method="post" action="php/contact.php">
                <div className="messages"></div>
                <div className="form-group col-md-6">
                  <label>First Name <span className="text-danger">*</span></label>
                  <input id="form_name" type="text" name="name" className="form-control" placeholder="First Name" required="required" data-error="Name is required." />
                  <div className="help-block with-errors"></div>
                </div>
                <div className="form-group col-md-6">
                  <label>Last Name <span className="text-danger">*</span></label>
                  <input id="form_name1" type="text" name="name" className="form-control" placeholder="Last Name" required="required" data-error="Name is required." />
                  <div className="help-block with-errors"></div>
                </div>
                <div className="form-group col-md-6">
                  <label>Email Address <span className="text-danger">*</span></label>
                  <input id="form_email" type="email" name="email" className="form-control" placeholder="Email" required="required" data-error="Valid email is required." />
                  <div className="help-block with-errors"></div>
                </div>
                <div className="form-group col-md-6">
                  <label>Phone Number <span className="text-danger">*</span></label>
                  <input id="form_phone" type="tel" name="phone" className="form-control" placeholder="Phone" required="required" data-error="Phone is required" />
                  <div className="help-block with-errors"></div>
                </div>
                <div className="form-group col-md-12">
                  <label>Message <span className="text-danger">*</span></label>
                  <textarea id="form_message" name="message" className="form-control" placeholder="Message" rows="4" required="required" data-error="Please,leave us a message."></textarea>
                  <div className="help-block with-errors"></div>
                </div>
                <div className="col-md-12 mt-4">
                  <button className="btn btn-primary btn-animated"><span>Send Messages</span></button>
                </div>
              </form>
            </div>
            <div className="col-lg-4 mt-6 mt-lg-0">
              <div className="shadow-sm rounded p-5">
                <div className="mb-5">
                  <h6 className="text-primary mb-1">— Contact Info</h6>
                  <h4 className="mb-0">We Are here To help You</h4>
                </div>
                <div className="d-flex mb-3">
                  <div className="mr-2">
                    <i className="las la-map ic-2x text-primary"></i>
                  </div>
                  <div>
                    <h6 className="mb-1 text-dark">Store address</h6>
                    <p className="mb-0 text-muted">423B, Road Wordwide Country, USA</p>
                  </div>
                </div>
                <div className="d-flex mb-3">
                  <div className="mr-2">
                    <i className="las la-envelope ic-2x text-primary"></i>
                  </div>
                  <div>
                    <h6 className="mb-1 text-dark">Email Us</h6>
                    <a className="text-muted" href="mailto:themeht23@gmail.com"> themeht23@gmail.com</a>
                  </div>
                </div>
                <div className="d-flex mb-3">
                  <div className="mr-2">
                    <i className="las la-mobile ic-2x text-primary"></i>
                  </div>
                  <div>
                    <h6 className="mb-1 text-dark">Phone Number</h6>
                    <a className="text-muted" href="tel:+912345678900">+91-234-567-8900</a>
                  </div>
                </div>
                <div className="d-flex mb-5">
                  <div className="mr-2">
                    <i className="las la-clock ic-2x text-primary"></i>
                  </div>
                  <div>
                    <h6 className="mb-1 text-dark">Working Hours</h6>
                    <span className="text-muted">Mon - Fri: 10AM - 7PM</span>
                  </div>
                </div>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a className="bg-white shadow-sm rounded p-2" href="#"><i className="la la-facebook"></i></a>
                  </li>
                  <li className="list-inline-item">
                    <a className="bg-white shadow-sm rounded p-2" href="#"><i className="la la-dribbble"></i></a>
                  </li>
                  <li className="list-inline-item">
                    <a className="bg-white shadow-sm rounded p-2" href="#"><i className="la la-instagram"></i></a>
                  </li>
                  <li className="list-inline-item">
                    <a className="bg-white shadow-sm rounded p-2" href="#"><i className="la la-twitter"></i></a>
                  </li>
                  <li className="list-inline-item">
                    <a className="bg-white shadow-sm rounded p-2" href="#"><i className="la la-linkedin"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="pt-0">
        <div class="container">
          <hr class="mt-0 mb-10" />
          <div class="row justify-content-center text-center mb-5">
            <div class="col-lg-8">
              <div>
                <h6 class="text-primary mb-1">— Easy to Find</h6>
                <h2 class="mb-0">Our Store Location</h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <div class="map" style={{ height: '500px' }}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.840108181602!2d144.95373631539215!3d-37.8172139797516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sin!4v1497005461921" allowfullscreen="" class="w-100 h-100 border-0"></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contatct;
