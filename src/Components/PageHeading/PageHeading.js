import React from "react";
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
const Page_Heading = ({
  title,
  animationSrc,
  firstBreadcrumb,
  secondBreadcrumb,
}) => {
  return (
    // <section className="bg-light">
    //   <Container>
    //     <Row className="align-items-center">
    //       <Col md={6}>
    //         <h2 className="mb-0">{title}</h2>
    //         <Breadcrumb className="col-md-6 mt-3 mt-md-0">
    //           <BreadcrumbItem className="mt-2">
    //             <Link className="text-dark" to="/index">
    //               Home
    //             </Link>
    //           </BreadcrumbItem>
    //           <BreadcrumbItem className="mt-2">
    //             <Link className="text-dark" to={firstBreadcrumb.link}>
    //               {firstBreadcrumb.label}
    //             </Link>
    //           </BreadcrumbItem>
    //           <BreadcrumbItem className="mt-2">
    //             {secondBreadcrumb.active ? (
    //               <span className="text-primary">{secondBreadcrumb.label}</span>
    //             ) : (
    //               <Link className="text-dark" to={secondBreadcrumb.link}>
    //                 {secondBreadcrumb.label}
    //               </Link>
    //             )}
    //           </BreadcrumbItem>
    //         </Breadcrumb>
    //       </Col>
    //     </Row>
    //   </Container>
    //   <div className="position-absolute animation-1">
    //     <lottie-player
    //       src="https://lottie.host/59ba3e9a-bef6-400b-adbb-0eb8c20c9f65/WPBRmjAinD.json"
    //       background="transparent"
    //       speed="1"
    //       loop
    //       autoplay
    //     ></lottie-player>
    //   </div>
    // </section>
    <section className="bg-light">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-md-6">
        <h1 className="h2 mb-0">{title}</h1>
      </div>
      <div className="col-md-6 mt-3 mt-md-0">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb justify-content-md-end bg-transparent p-0 m-0">
            <li className="breadcrumb-item">
              <a className="text-dark" href="/">
                <i className="las la-home mr-1"></i>Home
              </a>
            </li>
            <li className="breadcrumb-item">{firstBreadcrumb.label}</li>
            <li className="breadcrumb-item active text-primary" aria-current="page">
              {secondBreadcrumb.label}
            </li>
          </ol>
        </nav>
      </div>
    </div>
    {/* / .row */}
  </div>
  {/* / .container */}
</section>

  );
};

export default Page_Heading;
