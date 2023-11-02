import React from 'react'
import Page_Heading from '../Components/PageHeading/PageHeading'
import SideBar from '../Components/Sidebar/SideBar';
import {
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  Container,
  Button,
  CardTitle,
  CardSubtitle,
  CardText,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../Components/ProductCard';
import CustomPagination from '../Components/pagination';
import { useEffect } from 'react';
import { addToCart, addToWishList } from '../store/reducer/productReducer';
function PGLS() {
  const firstBreadcrumb = { label: "Pages" };
  const secondBreadcrumb = {
    label: "Shop Grid Left Sidebar",
    active: true,
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("1");
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
    setActivePage(1);
  };

  const allProducts = useSelector((state) => state.products.allProducts);


  // const filteredProducts = useSelector(
  //   (state) => state.products.filteredProducts
  // );
  const filteredProducts = useSelector((state) => {
    const option = parseInt(selectedOption);
    switch (option) {
      case 1: // Newest Item
        return state.products.filteredProducts;
      case 2: // High To Low
        return state.products.filteredProducts.slice().sort((a, b) => b.price - a.price);
      case 3: // Low To High
        return state.products.filteredProducts.slice().sort((a, b) => a.price - b.price);
      default:
        return state.products.filteredProducts;
    }
  });

  const filters = useSelector((state) => state.products.filters);


  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const [activePage, setActivePage] = useState(1);
  const pageSize = 9;

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
  const [activeFilter, setActiveFilter] = useState('grid');

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <div className='page-wrapper'>
      <Page_Heading
        title="Shop Grid Left Sidebar"
        firstBreadcrumb={firstBreadcrumb}
        secondBreadcrumb={secondBreadcrumb}
      />
      <div className='page-content'>
        <section>
          <Container>
            <Row>
              <Col lg={9} md={12} className="order-lg-1">
                <Row className="">
                  <Col>
                    <Card className="border-0 p-2">
                      <Row className="align-items-center">
                        <Col md="5" className="mb-3 mb-md-0">
                          <CardText tag="span" className="text-muted">
                            Showing 1 to {productsToShow.length} of
                            {" "}{filteredProducts.length}
                          </CardText>
                        </Col>
                        <Col
                          md="7"
                          className="d-flex align-items-center justify-content-md-end"
                        >
                          <div className="view-filter">

                            <Link
                              to="/shop-grid-left-sidebar"
                              className={`me-2 ${activeFilter === 'grid' ? 'active text-primary' : ''}`}
                              onClick={() => handleFilterClick('grid')}
                            >
                              <i className="lab la-buromobelexperte"></i>
                            </Link>
                            <Link
                              to="/shop-list-left-sidebar"
                              className={`text-dark ${activeFilter === 'list' ? 'active text-primary' : ''}`}
                              onClick={() => handleFilterClick('list')}
                            >
                              <i className="las la-list"></i>
                            </Link>
                          </div>
                          <div className="sort-filter ml-2 d-flex align-items-center">
                            <select class="custom-select" id="inputGroupSelect02" onChange={handleOptionChange} value={selectedOption}>
                              <option selected>Sort By</option>
                              <option value="1">Newest Item</option>
                              <option value="2">High To Low</option>
                              <option value="3">Low To High</option>
                            </select>
                          </div>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                </Row>
                <Row className="text-center">
                  {productsToShow.map((product) => (
                    <Col lg="4" md="6" className="mt-5">
                      <ProductCard
                        id={product.id}
                        imgBackSrc={`assets/images/${product.pictures[0]}`}
                        imgFrontSrc={`assets/images/${product.pictures[1]}`}
                        title={product.name}
                        price={product.salePrice}
                        actualPrice={product.price}
                        rating={product.rating}

                      />
                    </Col>
                  ))}

                </Row>
                <Row
                  className="mt-5 mb-5"
                  style={{ justifyContent: "center" }}
                >
                  <CustomPagination
                    activePage={activePage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                </Row>
              </Col>
              <div class="col-lg-3 col-md-12 sidebar mt-8 mt-lg-0">
                <SideBar />
              </div>
            </Row>
          </Container>
        </section>
      </div>
    </div>
  )
}

export default PGLS