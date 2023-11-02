import React from "react";
import BlogSection from "../Components/Blog/BlogSection";
import InstagramSection from "../Components/InstagramSection/InstagramSection";
import HeroBanner3 from "../Components/Hero Banner/HeroBanner3";
import ProductIndex3 from "../Components/Trending/ProductIndex3";
import CountDown3 from "../Components/Countdown/CountDown3";
import NewCollection3 from "../Components/Our Products/NewCollection3";
import ProductAds from "../Components/Section/ProductAds";
import LogoSection from "../Components/LogoSection/LogoSection";
import LogoSection2 from "../Components/LogoSection/LogoSection2";
import { useSelector } from "react-redux";

function Index3() {
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
  return <div className="page-wrapper">
    <HeroBanner3 />

    <div class="page-content">
      <ProductIndex3 />
      {/* <FeatureIndex feature={feature} /> */}
      <CountDown3 />
      <NewCollection3 />
      <ProductAds />
      <LogoSection2 logos={logos} />
      <BlogSection blogs={filteredBlogs} title={"Fashion Blog"} />
      <InstagramSection />
    </div>
  </div>;
}

export default Index3;
