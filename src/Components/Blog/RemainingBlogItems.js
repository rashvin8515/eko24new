import React from "react";
import { Link } from "react-router-dom";
import { Card, Row, Col, CardBody } from "reactstrap";
import { setSelectedBlog } from "../../store/reducer/blogReducer";
import { useDispatch } from "react-redux";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import BlogCard from "./BlogCard";

const RemainingBlogItems = ({ blogs }) => {
    const dispatch = useDispatch();
    const owlOptions = {
        dots: false,
        nav: false,
        items: 2,
        margin: 30,

    };
    return (
        <OwlCarousel className="owl-carousel no-pb" {...owlOptions} autoPlay>
            {blogs.map((blog) => (
                <div className="item" key={blog.id}>
                    <div class="card border-0 bg-transparent">
                        <div class="position-relative rounded overflow-hidden">
                            <div
                                class="position-absolute z-index-1 bottom-0 bg-white text-primary shadow-primary text-center py-1 px-2 rounded ml-3 mb-3">
                                {blog.date}</div>
                            <img className="card-img-top hover-zoom " style={{ height: '25rem', width: '30rem' }} src={blog.image} alt="Image" />
                        </div>
                        <div class="card-body px-0 pb-0">
                            <div>
                                {blog.category.map((cat, i) => (
                                    <a key={i} className="d-inline-block link-title btn-link text-small mr-2" href="#">
                                        {cat}
                                    </a>
                                ))}
                            </div>
                            <h2 class="h5 font-w-6 mt-3">
                                <Link
                                    className="link-title"
                                    to="/blog-single"
                                    onClick={() => {
                                        dispatch(setSelectedBlog(blog.image));
                                    }}
                                >
                                    {blog.title}
                                </Link>
                            </h2>
                        </div>
                        <div></div>
                    </div>
                </div>
            ))}
        </OwlCarousel>
    );
};

export default RemainingBlogItems;
