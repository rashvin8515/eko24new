import React from "react";
import Page_Heading from "../Components/PageHeading/PageHeading";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";

function OrderComplete() {
    const firstBreadcrumb = { label: "Pages", link: "/order-complete" };
    const secondBreadcrumb = {
        label: "Order Completed",
        link: "/order-complete",
        active: true,
    };
    return (
        <div>
            <div className="page-wrapper">
                <Page_Heading
                    title="Order Completed"
                    firstBreadcrumb={firstBreadcrumb}
                    secondBreadcrumb={secondBreadcrumb}
                />
                <div className="page-content">
                    <section className="bg-light">
                        <Container>
                            <Row className="align-items-center">
                                <Col md={12} className="text-center">
                                    <h3 className="mb-4">
                                        Thank you for purchasing, Your order is complete
                                    </h3>
                                    <Link className="btn btn-primary btn-animated mr-2" to="/">
                                        <i class="las la-home mr-1"></i>Home
                                    </Link>
                                    <Link to="/shop-grid-left-sidebar" className="btn btn-dark btn-animated">
                                        <i class="las la-shopping-cart mr-1"></i>Continue Shopping
                                    </Link>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default OrderComplete;
