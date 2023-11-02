import React from 'react'
import { Container, Card, CardBody, CardFooter, Button,Col,Row } from 'reactstrap';
import OwlCarousel from 'react-owl-carousel';
import ProductCard from '../ProductCard';
import { useSelector } from 'react-redux';

function ProductIndex6() {
    const products = useSelector    ((state) => state.products.allProducts);
    const kidsProducts = products.filter((product) => product.category === "Kids").slice(4, 8);
  return (
    <div>
    <section>
        <Container>
            <Row className='justify-content-center text-center mb-5'>
                <Col lg={6} md={10}>
                <div>
          <h6 class="text-primary mb-1">
                  — New Collection
              </h6>
          <h2 class="mb-0">Our Products</h2>
        </div>
                </Col>
            </Row>
        </Container>
        <Container>
        <OwlCarousel className="owl-carousel no-pb owl-2" dots={false} nav={true} items={4} mdItems={2} smItems={1}>
          {kidsProducts.map((product) => (
            <div key={product.id} className="item">
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
        </OwlCarousel>
      </Container>
    </section>
    </div>
  )
}

export default ProductIndex6