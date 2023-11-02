import React from "react";
import { Container, Row, Col } from "reactstrap";
import BlogCard from "./BlogCard";
import { useSelector } from "react-redux";

const BlogSection = ({ blogs, title }) => {
  // const blogs = useSelector(
  //   (state) => state.blog.blogItems
  // );
  // const filteredBlogs = blogs.filter(
  //   (blog) => blog.category.includes("Cloth") || blog.category.includes("Fashion")
  // ).slice(0, 4);
  return (
    <section>
      <Container>
        <Row className="justify-content-center text-center mb-5">
          <Col lg="8" md="10" sm="12">
            <div>
              <h6 className="text-primary mb-1">— {title}</h6>
              <h2 className="mb-0">Latest News Feed</h2>
            </div>
          </Col>
        </Row>
        <Row>
          {blogs.map((blogs, index) => (
            <Col key={index} lg="4" className="mt-5 mt-lg-0">
              <BlogCard
                date={blogs.date}
                image={blogs.image}
                category={blogs.category}
                title={blogs.title}
              />
            </Col>
          ))}
        </Row>
        <Row className="justify-content-center text-center mt-5">
          <Col>
            <a className="btn btn-dark" href="blog-card">
              View All Blog
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlogSection;
