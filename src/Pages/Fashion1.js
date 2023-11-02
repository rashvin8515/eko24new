import React from "react";
import BannerSliderIndex from "../Components/Hero Banner/BannerSlideIndex";
import FeatureIndex from "../Components/Feature/FeatureIndex";
import ProductIndex from "../Components/Trending/ProductIndex";
import CountDown from "../Components/Countdown/CountDown";
import NewCollection from "../Components/Our Products/NewCollection";
import Section from "../Components/Section/Section";
import NewsletterSection from "../Components/News/NewsLetterSection";
import LogoSection from "../Components/LogoSection/LogoSection";
import BlogSection from "../Components/Blog/BlogSection";
import InstagramSection from "../Components/InstagramSection/InstagramSection";
import { useSelector } from "react-redux";

export default function Index() {
  const feature = [
    {
      icon: "las la-truck ic-2x text-primary",
      title: "Free Shipping",
      description: "Writing result-oriented",
    },
    {
      icon: "las la-hand-holding-usd ic-2x text-primary",
      title: "Money Return",
      description: "Writing result-oriented",
    },
    {
      icon: "las la-lock ic-2x text-primary",
      title: "Secure Payment",
      description: "Writing result-oriented",
    },
    {
      icon: "las la-headset ic-2x text-primary",
      title: "24/7 Support",
      description: "Writing result-oriented",
    },
  ];

  const logos = [
    "assets/images/client/01.png",
    "assets/images/client/02.png",
    "assets/images/client/03.png",
    "assets/images/client/04.png",
    "assets/images/client/05.png",
    "assets/images/client/06.png",
    "assets/images/client/07.png",
    "assets/images/client/08.png",
  ];
  const blogs = useSelector(
    (state) => state.blog.blogItems
  );
  const filteredBlogs = blogs.filter(
    (blog) => blog.category.includes("Cloth") || blog.category.includes("Fashion")
  ).slice(0, 4);


  return (
    <div className="page-wrapper">
      <BannerSliderIndex />
      <div class="page-content">
        <FeatureIndex feature={feature} />
        <ProductIndex />
        <CountDown />
        <NewCollection />
        <Section />
        <NewsletterSection />
        <LogoSection logos={logos} />
        <BlogSection blogs={filteredBlogs} title={"Fashion Blog"} />
        <InstagramSection />
      </div>
    </div>
  );
}
