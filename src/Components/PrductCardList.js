import React from "react";
import { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, Row, Col, Input } from 'reactstrap';

import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addToCart, addToWishList, setSelectedProduct } from "../store/reducer/productReducer";

function ProductCardList({ id, imgBackSrc, imgFrontSrc, title, price, actualPrice, rating }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const allProducts = useSelector((state) => state.products.allProducts);


  const selectedId = useSelector((state) => state.products.selectedProduct);
  const selectedProduct = allProducts.find((product) => product.id === selectedId);
  console.log(selectedProduct);


  const filteredProducts = useSelector(
    (state) => state.products.filteredProducts
  );
  const filters = useSelector((state) => state.products.filters);

  const product = allProducts.find((product) => product.id === id);
  // console.log(product);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const [activePage, setActivePage] = useState(1);
  const pageSize = 6;

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };
  const totalPages = Math.ceil(filteredProducts.length / pageSize);
  const startIndex = (activePage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const productsToShow = filteredProducts.slice(startIndex, endIndex);
  const handleAddToCart = (product) => {
    const size = product.size[0];
    const color = product.colors[0];

    const productToAdd = {
      ...product,
      size,
      colors: color,
      quantity: 1,
    };
    console.log(productToAdd);

    dispatch(addToCart(productToAdd));
  };
  const handleAddToWishList = (product) => {
    const size = product.size[0];
    const color = product.colors[0];

    const productToAdd = {
      ...product,
      size,
      colors: color,
      quantity: 1,
    };

    dispatch(addToWishList(productToAdd));
  };
  const renderRating = () => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<i key={i} className="las la-star"></i>);
    }
    return stars;
  };
  const renderSelectedRating = () => {
    const stars = [];
    for (let i = 0; i < selectedProduct.rating; i++) {
      stars.push(<i key={i} className="las la-star"></i>);
    }
    return stars;
  };
  function refreshPage() {
    window.location.reload(false);
  }
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSetlectedColor] = useState("");
  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };
  const handleColorClick = (color) => {
    setSetlectedColor(color);
  };
  const handleSelectedAddToCart = (product) => {
    const size = selectedSize || product.size[0];
    const color = selectedColor || product.colors[0];

    const productToAdd = {
      ...product,
      size,
      colors: color,
      quantity: quantity,
    };
    console.log(productToAdd);

    dispatch(addToCart(productToAdd));
  };
  const handleSelectedAddToWishList = (product) => {
    const size = selectedSize || product.size[0];
    const color = selectedColor || product.colors[0];

    const productToAdd = {
      ...product,
      size,
      colors: color,
      quantity: quantity,
    };

    dispatch(addToWishList(productToAdd));
  };

  return (
    <>
      <div class="card product-card product-list mb-5">
        <div class="row align-items-center">
          <div class="col-lg-4 col-md-5">
            <button class="btn-wishlist btn-sm" type="button" data-toggle="tooltip" data-placement="left" title="Add to wishlist"
              onClick={() => { handleAddToWishList(product) }}
            ><i class="lar la-heart"></i>
            </button>
            <Link class="card-img-hover d-block" to="/product-left-image" onClick={() => {
              dispatch(setSelectedProduct(id));
              // refreshPage()
            }}>
              <img class="card-img-top card-img-back" src={imgBackSrc} alt="..." />
              <img class="card-img-top card-img-front" src={imgFrontSrc} alt="..." />
            </Link>
          </div>
          <div class="col-lg-8 col-md-7">
            <div class="card-info">
              <div class="card-body">
                <div class="product-title">
                  <Link
                    to="/product-left-image"
                    onClick={() => {
                      dispatch(setSelectedProduct(id));
                      // refreshPage()
                    }}
                    className="mb-2 d-block link-title h6"
                  >
                    {title}
                  </Link>
                </div>
                <div class="mt-1"> <span class="product-price"><del class="text-muted">${price}</del> ${actualPrice}</span>
                  <div class="star-rating">
                    {renderRating()}                    </div>
                </div>
                <p class="mb-3 mt-2">Curabitur semper varius lectus sed consequat. Nam accumsan dapibus sem, sed lobortis nisi porta vitae</p>
              </div>
              <div class="card-footer bg-transparent border-0">
                <div class="product-link d-flex align-items-center">

                  <button
                    class="btn btn-compare"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Compare"
                    type="button"
                    onClick={() => { handleAddToWishList(product) }}
                  >
                    <i class="lar la-heart"></i>
                  </button>
                  <button class="btn-cart btn btn-primary btn-animated mx-3" type="button" onClick={() => {
                    handleAddToCart(product)
                  }}><i class="las la-shopping-cart mr-1"></i>
                  </button>

                  <button
                    class="btn btn-view"
                    // data-toggle="tooltip"
                    data-placement="top"
                    title="Quick View"
                    onClick={() => {
                      dispatch(setSelectedProduct(product.id))
                      toggleModal()
                    }}
                  >
                    <span >
                      <i class="las la-eye"></i>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal className="" style={{ maxWidth: '50%' }} isOpen={modalOpen} toggle={toggleModal}>
        {/* <ModalHeader toggle={toggleModal} className="border-bottom-0 pb-0">
          
        </ModalHeader> */}
        <div>
          <Row>
            <Col xs={11} className="align-items-center">
              {" "}
              {/* <h5 className=" px-4">
                Your Wishlist ({wishListItems?.length})
              </h5> */}
            </Col>
            <Col xs={1} className="flex-end">
              {" "}

              <Button
                className="btn btn-primary btn-sm fs-1"
                onClick={toggleModal}
              >
                <i className="las la-times"></i>
              </Button>
            </Col>
          </Row>
        </div>
        <ModalBody>
          <Row className="align-items-center">
            <Col lg="5" className="col-12">
              <img class="img-fluid rounded" src={`assets/images/${selectedProduct.pictures[0]}`} alt="" />
            </Col>
            <Col lg="7" className="col-12 mt-5 mt-lg-0">
              <div className="product-details">
                <h3 class="mb-0">{selectedProduct.name}</h3>
                <div class="star-rating mb-4">
                  {renderSelectedRating()}
                </div>
                <span class="product-price h4">${selectedProduct.salePrice} <del class="text-muted h6">${selectedProduct.price}</del></span>
                <ul class="list-unstyled my-4">
                  <li class="mb-2">Availibility: <span className="text-muted"> {selectedProduct.stock}</span>
                  </li>
                  <li>Categories: <span className="text-muted">{selectedProduct.category}</span>
                  </li>
                </ul>
                <p class="mb-4">{selectedProduct.description}</p>
                <div class="d-sm-flex align-items-center mb-5">
                  <div className="d-sm-flex align-items-center mr-sm-4">
                    <div className="d-flex align-items-center mr-sm-4">
                      <Button
                        className="btn-product btn-product-up"
                        onClick={() => {
                          if (quantity > 1) setQuantity(quantity - 1);
                        }}
                      >
                        <i className="las la-minus"></i>
                      </Button>
                      <Input
                        className="form-product"
                        type="number"
                        name="form-product"
                        value={quantity}
                        onChange={(e) => {
                          const newQuantity = parseInt(e.target.value);
                          if (
                            newQuantity >= 1 &&
                            newQuantity <= product.stock
                          ) {
                            setQuantity(newQuantity);
                          }
                        }}
                        max={product.stock}
                      />
                      <Button
                        className="btn-product btn-product-down"
                        onClick={() => {
                          if (quantity < product.stock)
                            setQuantity(quantity + 1);
                        }}
                      >
                        <i className="las la-plus"></i>
                      </Button>
                    </div>
                  </div>
                  <Input
                    type="select"
                    className="custom-select mt-3 mt-sm-0"
                    name="size"
                    id="size"
                    placeholder="Size"
                    onChange={handleSizeChange}
                  >
                    <option disabled selected hidden>
                      Size
                    </option>
                    {selectedProduct.size.map((size) => (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    ))}
                  </Input>
                  <div className="d-flex  ml-sm-4 mt-3 mt-sm-0">
                    {selectedProduct.colors.map((col) => (
                      <div className="form-check pl-2">
                        <input type="checkbox" value={col} onChange={() => handleColorClick(col)} className="form-check-input" id={col} />
                        <label className="form-check-label" style={{ background: col }} htmlFor={col} />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="product-link d-flex align-items-center mt-4">
                  <Button
                    className="btn btn-primary btn-animated mr-sm-4 mb-3 mb-sm-0"
                    type="button"
                    onClick={() => handleSelectedAddToCart(product)}
                  >
                    <i class="las la-shopping-cart mr-1"></i>Add To Cart
                  </Button>
                  <Button
                    className="btn btn-dark btn-animated"
                    type="button"
                    onClick={() => {
                      handleSelectedAddToWishList(product);
                    }}
                  >
                    <i class="lar la-heart mr-1"></i>Add To Wishlist
                  </Button>

                </div>
                <div class="d-sm-flex align-items-center border-top pt-4 mt-5">
                  <h6 class="mb-sm-0 mr-sm-4">Share It:</h6>
                  <ul class="list-inline">
                    <li class="list-inline-item"><a class="bg-white shadow-sm rounded p-2" href="#"><i
                      class="la la-facebook"></i></a>
                    </li>
                    <li class="list-inline-item"><a class="bg-white shadow-sm rounded p-2" href="#"><i
                      class="la la-dribbble"></i></a>
                    </li>
                    <li class="list-inline-item"><a class="bg-white shadow-sm rounded p-2" href="#"><i
                      class="la la-instagram"></i></a>
                    </li>
                    <li class="list-inline-item"><a class="bg-white shadow-sm rounded p-2" href="#"><i
                      class="la la-twitter"></i></a>
                    </li>
                    <li class="list-inline-item"><a class="bg-white shadow-sm rounded p-2" href="#"><i
                      class="la la-linkedin"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    </>
  );
}

export default ProductCardList;
