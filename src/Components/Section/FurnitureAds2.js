import React from 'react'
import { Col, Container, Row } from 'reactstrap'

function FurnitureAds2() {
    const sectionStyle = {
        backgroundImage: 'url(assets/images/furniture/01.png)',
      };
  return (
    <div>
    <section class="custom-py-1 parallaxie" style={sectionStyle}>
    <Container >
      <Row class="row">
        <Col xs={12} lg={6} > 
           <h4 class="mb-3"><span class="text-primary">2020</span> Collection</h4>
           <h2 class="mb-3 font-w-7">New Top Trendy Furniture Accessories</h2>
           <a class="btn btn-primary btn-animated" href="#"><i class="las la-shopping-cart mr-1"></i> Shop Now</a>
        </Col>
      </Row>
    </Container>
  </section>
  </div>
  )
}

export default FurnitureAds2