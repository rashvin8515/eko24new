import React from "react";
import ProductCard from "../ProductCard";
import { useSelector } from "react-redux/es";
import { Col, Container, Row } from "reactstrap";

function ProductIndex3() {
  const trendingproducts = useSelector(
    (state) => state.products.allProducts
  ).slice(0, 3);
  console.log(trendingproducts);
  // const sortedProducts = trendingproducts.sort((a, b) => b.rating - a.rating);

  // // Select the first 8 products with highest ratings
  // const topRatedProducts = sortedProducts.slice(0, 6);
  // console.log(topRatedProducts);
  return (
    <>
      <section className="p-0">
        <Container>
          <Row>
            <Col>
              <div class="shadow p-5 py-10 mt-n10 z-index-1 bg-white">
                <Row className="justify-content-center text-center">
                  <div class="col-lg-8 col-md-10">
                    <div class="mb-5">
                      <h6 class="text-primary mb-1">— New Collection</h6>
                      <h2 class="mb-0">Trending Products</h2>
                    </div>
                  </div>
                </Row>
                <Row >

                  {trendingproducts.map((product) => (

                    <Col xl="4" lg="4" md="6" key={product.id}>
                      <ProductCard
                        id={product.id}
                        imgBackSrc={`assets/images/${product.pictures[0]}`}
                        imgFrontSrc={`assets/images/${product.pictures[1]}`}
                        title={product.title}
                        price={product.salePrice}
                        actualPrice={product.price}
                        rating={product.rating}

                      />
                    </Col>
                  ))}
                </Row>
              </div></Col></Row>
        </Container>
      </section>
    </>
  );
}

export default ProductIndex3;
