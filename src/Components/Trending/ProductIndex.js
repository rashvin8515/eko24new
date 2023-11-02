import React from "react";
import ProductCard from "../ProductCard";
import { useSelector } from "react-redux/es";

function ProductIndex() {
  const trendingproducts = useSelector(
    (state) => state.products.allProducts
  ).slice(0, 8);
  console.log(trendingproducts);
  // const sortedProducts = trendingproducts.sort((a, b) => b.rating - a.rating);

  // // Select the first 8 products with highest ratings
  // const topRatedProducts = sortedProducts.slice(0, 8);
  // console.log(topRatedProducts);
  return (
    <>
      <section>
        <div class="container-fluid px-lg-8">
          <div class="row justify-content-center text-center">
            <div class="col-lg-8 col-md-10">
              <div class="mb-8">
                <h6 class="text-primary mb-1">— New Collection</h6>
                <h2 class="mb-0">Trending Products</h2>
              </div>
            </div>
          </div>
          <div class="row">

            {trendingproducts.map((product) => (

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
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductIndex;
