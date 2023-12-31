import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Banner = () => {
  const options = {
    items: 1,
    nav: true,
    dots: false,
    autoplay: true,
    loop: true,
  };

  const slides = [
    {
      bgImg: "assets/images/bg/01.jpg",
      title: "A New Online Shop experience",
      subtitle: "Welcome Ekocart",
      button: "Shop Now",
    },
    {
      bgImg: "assets/images/bg/02.jpg",
      title: "Trending Men's Collection",
      subtitle: "2020 Latest Style",
      button: "View Collection",
    },
  ];

  return (
    <div>
      <OwlCarousel
        className="banner-slider owl-carousel no-pb owl-2"
        {...options}
        navText={["<span class='las la-arrow-left'><span></span></span>", "<span class='las la-arrow-right'><span></span></span>"]}

      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="item bg-pos-rt"
            style={{ backgroundImage: `url(${slide.bgImg})` }}
          >
            <div className="container h-100">
              <div className="row h-100 align-items-center">
                <div className="col-lg-7 col-md-12 custom-py-1 position-relative z-index-1">
                  <h6 className="font-w-6 text-primary animated3">
                    {slide.subtitle}
                  </h6>
                  <h1 className="mb-4 animated3">{slide.title}</h1>
                  <div className="animated3">
                    <a className="btn btn-primary btn-animated" href="#">
                      {slide.button}
                    </a>
                  </div>
                  <div className="hero-circle animated4"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default Banner;
