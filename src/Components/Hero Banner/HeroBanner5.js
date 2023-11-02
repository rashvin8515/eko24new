import React from 'react'
import { Col, Container, Row } from 'reactstrap'

function HeroBanner5() {
  return (
    <section className='banner pos-r p-0 mt-5'>
      <Container>
        <Row className='align-items-center'>
          <Col lg={3} className='order-lg-1'>
            <nav class="navbar navbar-expand-lg navbar-light categories d-block shadow-sm">
              <button class="navbar-toggler d-flex align-items-center text-uppercase" type="button" aria-controls="categoriesDropdown" aria-expanded="false" aria-label="Toggle navigation"> <i class="las la-stream"></i>Categories</button>
              <div class=" navbar-collapse" id="categoriesDropdown">
                <ul class="navbar-nav d-block w-100">
                  <li class="nav-item"> <a class="nav-link" href="#">Men</a>
                  </li>
                  <li class="nav-item"> <a class="nav-link" href="#">Women</a>
                  </li>
                  <li class="nav-item"> <a class="nav-link" href="#">Kids</a>
                  </li>
                  <li class="nav-item"> <a class="nav-link" href="#">Accessories</a>
                  </li>
                  <li class="nav-item"> <a class="nav-link" href="#">Clothing</a>
                  </li>
                  <li class="nav-item"> <a class="nav-link" href="#">Bags</a>
                  </li>
                  <li class="nav-item"> <a class="nav-link" href="#">Footwear</a>
                  </li>
                  <li class="nav-item"> <a class="nav-link" href="#">Watches</a>
                  </li>
                  <li class="nav-item"> <a class="nav-link" href="#">Jewellery</a>
                  </li>
                </ul>
              </div>
            </nav>
          </Col>
          <Col lg="9">
            <Row className="align-items-center">
              <Col lg="5" md="12" className="order-lg-1">
                <img className="img-fluid" src="assets/images/furniture/hero/01.png" alt="" />
              </Col>
              <Col lg="7" md="12" className="mt-5 mt-lg-0">
                <h6 className="font-w-6 text-primary animated3 mb-2">Welcome To Ekocart</h6>
                <h1 className="mb-3 animated3 font-w-5">
                  New Arrival <span className="font-w-8">Modern Chair</span>
                </h1>
                <p className="mb-4 animated3">
                  Our Product lights dominion divide years for fourth have don't stars is that saying ights dominion divide years for fourth have
                </p>
                <div className="animated3">
                  <a className="btn btn-primary btn-animated" href="#">
                    <i className="las la-shopping-cart mr-1"></i> Shop Now
                  </a>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default HeroBanner5