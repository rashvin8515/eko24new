import React from 'react'
import { Container, Card, CardBody, CardFooter, Button,Col,Row } from 'reactstrap';
import OwlCarousel from 'react-owl-carousel';
import ProductCard from '../ProductCard';
import { useSelector } from 'react-redux';

function NewCollectionKids() {
    const products = useSelector    ((state) => state.products.allProducts);
    const kidsProducts = products.filter((product) => product.category === "Kids").slice(0, 8);
  return (
    <div>
    <section>
        <Container>
            <Row className='justify-content-center text-center'>
                <Col lg={8} md={10}>
                <div>
          <h6 class="text-primary mb-1">
                  — New Collection
              </h6>
          <h2 class="mb-0">Trending Products</h2>
        </div>
                </Col>
            </Row>
        <Row>
        {kidsProducts.map((product) => (
              
              <div class="col-xl-3 col-lg-4 col-md-6" key={product.id}>
              <ProductCard
                  id={product.id}
                  imgBackSrc={`assets/images/${product.pictures[0]}`}
                  imgFrontSrc={`assets/images/${product.pictures[1]}`}
                  title={product.name}
                  price={product.salePrice}
                  actualPrice={product.price}
                  rating={product.rating}
                />
              </div>
            ))}
          </Row>
        </Container>

    </section>
    </div>
  )
}

export default NewCollectionKids;