import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

export default function HeaderTop() {
  const languages = [
    { name: "English", value: "en" },
    { name: "Arabic", value: "ar" },
    { name: "French", value: "fr" },
    { name: "Italian", value: "it" },
  ];
  const socialIcons = [
    { name: "Facebook", iconClass: "lab la-facebook-f" },
    { name: "Twitter", iconClass: "lab la-twitter" },
    { name: "LinkedIn", iconClass: "lab la-linkedin-in" },
    { name: "Instagram", iconClass: "lab la-instagram" },
  ];
  const [activeIcon, setActiveIcon] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0].name);
  function handleLanguageChange(language) {
    setSelectedLanguage(language);
    // You can perform any other action when the language is changed
  }

  return (
    <>
      <div class="header-top bg-dark py-1">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-12 d-flex align-items-center justify-content-between text-white">
              <div class="d-none d-md-flex align-items-center">
                <small class="mr-3">
                  <i class="las la-store text-primary mr-1 align-middle"></i>
                  Welcome to Our store Ekocart
                </small>{" "}
                <small>
                  <i class="las la-truck text-primary mr-1 align-middle"></i>
                  Free shipping worldwide
                </small>
              </div>
              <div class="d-flex align-items-center">
                <div className="language-selection mr-2">
                  <div className="dropdown">
                    <button
                      className="btn btn-sm text-white dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      {selectedLanguage}
                    </button>
                    <div className="dropdown-menu">
                      {languages.map((language) => (
                        <a
                          key={language.value}
                          className="dropdown-item"
                          href="#"
                          onClick={() => handleLanguageChange(language.name)}
                        >
                          {language.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div class="social-icons">
                  <ul class="list-inline mb-0">
                    {socialIcons.map((icon) => (
                      <li
                        key={icon.name}
                        className={`list-inline-item ${
                          activeIcon === icon.name ? "active" : ""
                        }`}
                        onMouseEnter={() => setActiveIcon(icon.name)}
                        onMouseLeave={() => setActiveIcon(null)}
                      >
                        <a className="text-muted" href="#">
                          <i className={icon.iconClass}></i>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
