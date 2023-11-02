import React, { useState } from "react";
import { Link } from "react-router-dom";
import DropdownMenuNavBar from "./DropDownMenuNavBar";
import ShopDropdown from "./DropDownMenuBarTable";
import CatalogDropDown from "./CatalogDropDown";
import {
  Container,
  Row,
  Col,
  Nav,
  NavItem,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavLink,
  ListGroup,
  ListGroupItem,
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeCartItem, removeWishListItem } from "../../store/reducer/productReducer";
import { toast } from "react-toastify";
export default function HeaderNavBar() {
  const wishListItems = useSelector((state) => state.products.wishList);
  const cartItems = useSelector((state) => state.products.cart);
  const allProducts = useSelector((state) => state.products.allProducts);
  const dispatch = useDispatch();
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [wishListOpen, setWishListOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const togglewWishList = () => setWishListOpen(!wishListOpen);
  const toggleCartList = () => setCartOpen(!cartOpen);
  const handleDeleteItem = (index) => {
    // Dispatch the action to remove the cart item from the reducer
    dispatch(removeWishListItem(index));
  };
  const subtotal = wishListItems.reduce((total, item) => {
    //const product = allProducts.find((prod) => prod.id === item.id);
    if (item) {
      return total + item.salePrice * item.quantity;
    }
    // console.log("product", total);
    return total;
  }, 0);
  const subtotalCart = cartItems.reduce((total, item) => {
    //const product = allProducts.find((prod) => prod.id === item.id);
    if (item) {
      return total + item.salePrice * item.quantity;
    }
    // console.log("product", total);
    return total;
  }, 0);
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    // dispatch(removeWishListItem(product.id));
    toast("Product goes to cart", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const homeLinks = [
    { url: "/", label: "Home - Fashion 1" },
    { url: "/index2", label: "Home - Fashion 2" },
    { url: "/index3", label: "Home - Fashion 3" },
    { url: "/index4", label: "Home - Electronic" },
    { url: "/index5", label: "Home - Furniture" },
    { url: "/index6", label: "Home - Kids" },
  ];

  const catagoryLinks = [
    {
      title: "Clothing",
      links: [
        { title: "All Clothing", url: "/shop-grid-left-sidebar" },
        { title: "Top T-Shirts & Shirts", url: "/shop-grid-left-sidebar" },
        { title: "Lingerie & Sleepwear", url: "/shop-grid-left-sidebar" },
        { title: "Leggings & Jeggings", url: "/shop-grid-left-sidebar" },
        { title: "Kurtas & Kurtis", url: "/shop-grid-left-sidebar" },
        { title: "Dresses & Skirts", url: "/shop-grid-left-sidebar" },
        { title: "Jumpers & Cardigans", url: "/shop-grid-left-sidebar" },
      ],
    },
    {
      title: "Shoes & Boots",
      links: [
        {
          title: "All Shoes & Boots",
          url: "/shop-grid-left-sidebar",
        },
        {
          title: "Branded Shoes",
          url: "/shop-grid-left-sidebar",
        },
        {
          title: "Boots",
          url: "/shop-grid-left-sidebar",
        },
        {
          title: "Heels",
          url: "/shop-grid-left-sidebar",
        },
        {
          title: "Sandals",
          url: "/shop-grid-left-sidebar",
        },
        {
          label: "Shoes",
          url: "/shop-grid-left-sidebar",
        },
        {
          label: "Wide Fit Shoes",
          url: "/shop-grid-left-sidebar",
        },
      ],
    },
    {
      title: "Bags & Accessories",
      links: [
        {
          title: "All Bags & Accessories",
          url: "/shop-grid-left-sidebar",
        },
        {
          title: "Accessories",
          url: "/shop-grid-left-sidebar",
        },
        {
          title: "Bags & Purses",
          url: "/shop-grid-left-sidebar",
        },
        {
          title: "Shoulder Bags",
          url: "/shop-grid-left-sidebar",
        },
        {
          title: "Skin Care",
          url: "/shop-grid-left-sidebar",
        },
        {
          title: "Hair Accessories",
          url: "/shop-grid-left-sidebar",
        },
        {
          title: "Artificial Jewellery",
          url: "/shop-grid-left-sidebar",
        },
      ],
    },
    {
      title: "Collections",
      links: [
        {
          title: "All Collections",
          url: "/shop-grid-left-sidebar",
        },
        {
          title: "Winter & Seasonal Wear",
          url: "/shop-grid-left-sidebar",
        },
        {
          title: "Beauty & Grooming",
          url: "/shop-grid-left-sidebar",
        },
        {
          title: "Ballerinas",
          url: "/shop-grid-left-sidebar",
        },
        {
          title: "Party Dresses",
          url: "/shop-grid-left-sidebar",
        },
        {
          title: "Ethnic Wear",
          url: "/shop-grid-left-sidebar",
        },
      ],
    },
  ];
  const [shopLinks, setShopLinks] = useState([
    {
      title: "Shop Layout",
      links: [
        { title: "Shop Grid - Left Sidebar", url: "/shop-grid-left-sidebar" },
        { title: "Shop Grid - Right Sidebar", url: "/shop-grid-right-sidebar" },
        { title: "Shop Grid - No Sidebar", url: "/shop-grid-no-sidebar" },
        { title: "Shop Grid - Full Width", url: "/shop-grid-fullwidth" },
        { title: "Shop List - Left Sidebar", url: "/shop-list-left-sidebar" },
        { title: "Shop List - Right Sidebar", url: "/shop-list-right-sidebar" },
        { title: "Shop List - No Sidebar", url: "/shop-list-no-sidebar" },
        { title: "Shop List - Full Width", url: "/shop-list-fullwidth" },
      ],
    },
    {
      title: "Product Pages",
      links: [
        { title: "Product Left Image", url: "/product-left-image" },
        { title: "Product Right Image", url: "/product-right-image" },
        { title: "Product Cart", url: "/product-cart" },
        { title: "Product Checkout", url: "/product-checkout" },
        { title: "Order Completed", url: "/order-complete" },
      ],
    },
  ]);

  const pagesLinks = [
    { label: "About", url: "/about-us" },
    { label: "FAQ", url: "/faq" },
    { label: "Login", url: "/login" },
    { label: "Login 2", url: "/login-2" },
    { label: "Sign Up", url: "/signup" },
    { label: "Coming Soon", url: "/coming-soon" },
    { label: "404", url: "/error-404" },
    { label: "Privacy Policy", url: "/privacy-policy" },
    { label: "Term & Conditions", url: "/terms-and-conditions" },
  ];

  const blogLinks = [
    { label: "Blog Card", url: "/blog-card" },
    { label: "Blog Listing 1", url: "/blog-listing" },
    { label: "Blog Listing 2", url: "/blog-listing-2" },
    { label: "Blog Single", url: "/blog-single" },
  ];
  const cartItems1 = useSelector((state) => state.products.cart);
  const calculateTotal = () => {
    return cartItems1.reduce((total, item) => {
      const itemTotal = item.quantity * item.salePrice;
      return total + itemTotal;
    }, 0);
  };

  return (
    <><div>
      <header className="site-header">

        <div id="header-wrap" class="shadow-sm">
          <Container class="container">
            <Row>
              {/* <!--menu start--> */}
              <Col>
                <nav class="navbar navbar-expand-lg navbar-light position-static">
                  <a class="navbar-brand logo d-lg-none" href="index.html">
                    <img class="img-fluid" src="assets/images/logo.png" alt="" />
                  </a>
                  <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                      <DropdownMenuNavBar title={"Home"} links={homeLinks} />

                      <CatalogDropDown
                        title={"Catalog"}
                        catagoryLinks={catagoryLinks}
                      />

                      <ShopDropdown title={"shop"} shopLinks={shopLinks} />

                      <DropdownMenuNavBar title={"Pages"} links={pagesLinks} />

                      <DropdownMenuNavBar title={"Blog"} links={blogLinks} />

                      <li class="nav-item">
                        <Link to="/contact-us" class="nav-link">
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div class="right-nav align-items-center d-flex justify-content-end">
                    <Link className="login-btn btn-link ms-3" to="/login">
                      <i class="las la-user-alt"></i>
                    </Link>
                    <Link
                      className="wishlist-btn btn-link ms-3"
                      onClick={togglewWishList}
                    >
                      <i class="lar la-heart"></i>
                    </Link>
                    <Link
                      className="d-flex align-items-center ms-3 mx-1"
                      onClick={toggleCartList}
                    >
                      <span class="bg-white px-2 py-1 shadow-sm rounded" data-cart-items={cartItems1.length}>
                        <i class="las la-shopping-cart"></i>
                      </span>

                    </Link>
                    <div>
                      <div class="ml-4 d-none d-md-block"> <small class="d-block text-muted">My Cart</small>
                        <span class="text-dark">{cartItems1.length} Items - ${calculateTotal()}</span>
                      </div>
                    </div>
                    {/* <div>
                      <a class="d-flex align-items-center" href="#" id="header-cart-btn" data-toggle="modal" data-target="#cartModal">
                        <span class="bg-white px-2 py-1 shadow-sm rounded" data-cart-items="2">
                          <i class="las la-shopping-cart"></i>
                        </span>
                        <div class="ml-4 d-none d-md-block"> <small class="d-block text-muted">My Cart</small>
                          <span class="text-dark">2 Items - $52</span>
                        </div>
                      </a>
                    </div> */}
                  </div>
                </nav>
              </Col>
              {/* <!--menu end--> */}
            </Row>
          </Container>

        </div>
      </header>

      <Modal
        isOpen={cartOpen}
        toggle={toggleCartList}
        className="cart-modal"
      >
        <div>
          <Row>
            <Col xs={9} className="py-4 align-item-center">
              {" "}
              <h5 className=" px-4">
                Your Cart ({cartItems?.length})
              </h5>
            </Col>
            <Col xs={3} className="align-item-center">
              {" "}
              <Button
                className="btn btn-primary btn-sm mt-4 fs-3"
                onClick={toggleCartList}
              >
                <i className="las la-times"></i>
              </Button>
            </Col>
          </Row>
        </div>
        {/* <div class="modal-header" toggle={toggleCartList}>
          <h5 class="modal-title" id="ModalLabel">Your Cart (2)</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span
            aria-hidden="true">&times;</span>
          </button>
        </div> */}
        <ModalBody>
          {cartItems.map((product) => {
            if (product) {
              return (
                <div>
                  <Row className="align-items-center my-5">
                    <Col xs="5" className="d-flex align-items-center">
                      <div className="mr-4">
                        <Button
                          type="submit"
                          className="btn btn-primary btn-sm"
                          onClick={() => {
                            dispatch(removeCartItem(product.id));
                          }}
                        >
                          {/* <AiOutlineCloseCircle /> */}
                          <i class="las la-times"></i>
                        </Button>
                      </div>
                      <a>
                        <img
                          className="img-fluid"
                          src={`assets/images/${product.pictures[0]}`}
                          alt="..."
                        />
                      </a>
                    </Col>
                    <Col xs="5">
                      <h6>
                        <div className="link-title">
                          {product.name}
                        </div>
                      </h6>
                      <div className="product-meta">
                        <span className="mr-2 text-primary">
                          ${product.salePrice.toFixed(2)}
                        </span>
                        <span className="text-muted">x {product.quantity}</span>
                      </div>
                    </Col>
                  </Row>
                </div>
              );
            }

            return null;
          })}
          <hr className="my-5" />
          <div className="d-flex justify-content-between align-items-center mb-8">
            <span className="text-muted">Subtotal:</span>
            <span className="text-dark">${subtotalCart.toFixed(2)}</span>
          </div>
          <Link
            to="/product-cart"
            className="btn btn-primary btn-animated mr-2"
          >
            <i className="las la-shopping-cart mr-1"></i>View Cart
          </Link>
          <Link to="/product-checkout" className="btn btn-dark">
            <i className="las la-money-check mr-1"></i>Continue To Checkout
          </Link>
        </ModalBody>
      </Modal>
      <Modal
        className="cart-modal"
        direction="end"
        isOpen={wishListOpen}
        toggle={togglewWishList}
      >
        <div>
          <Row>
            <Col xs={9} className="py-4 align-items-center">
              {" "}
              <h5 className=" px-4">
                Your Wishlist ({wishListItems?.length})
              </h5>
            </Col>
            <Col xs={3} className="align-items-center">
              {" "}

              <Button
                className="btn btn-primary btn-sm mt-4 fs-3"
                onClick={togglewWishList}
              >
                <i className="las la-times"></i>
              </Button>
            </Col>
          </Row>
        </div>
        <ModalBody className="">
          {wishListItems.map((product) => {
            if (product) {
              return (
                <div>
                  <Row className="align-items-center my-4">
                    <Col xs={5} className="d-flex align-items-center">

                      <div className="mr-4">
                        <Button
                          type="submit"
                          className="btn btn-primary btn-sm"
                          onClick={() => {
                            dispatch(removeWishListItem(product.id));
                          }}
                        >
                          {/* <AiOutlineCloseCircle /> */}
                          <i class="las la-times"></i>
                        </Button>
                      </div>
                      <div>
                        <img
                          className="img-fluid"
                          src={`assets/images/${product.pictures[0]}`}
                          alt="..."
                        />
                      </div>
                    </Col>
                    <Col xs={5}>
                      <h6>
                        <div className="link-title">
                          {product.name}{" "}
                        </div>
                      </h6>
                      <div className="product-meta">
                        <span className="mx-2 text-primary">
                          ${product.salePrice.toFixed(2)}
                        </span>
                        <span className="text-muted">x {product.quantity}</span>
                      </div>
                      <div className="product-meta"></div>
                    </Col>
                    <Col xs={2} className="d-flex align-items-center mt-4">
                      <span
                        onClick={() => handleAddToCart(product)}
                        className="mx-2 btn text-white fs-1 ms-auto "
                      >
                        {/* <BsFillCartCheckFill /> */}
                        <i className="las la-shopping-cart"></i>

                      </span>
                    </Col>
                  </Row>
                </div>
              );
            }

            return null;
          })}
          <hr className="my-5" />
          <div className="d-flex justify-content-between align-items-center mb-8">
            <span className="text-muted">Subtotal:</span>
            <span className="text-white">${subtotal.toFixed(2)}</span>
          </div>
          <Link
            to="/product-cart"
            className="btn btn-primary btn-animated mr-2"
          >
            <i className="las la-shopping-cart mr-1"></i>View Cart
          </Link>
          <Link to="/product-checkout" className="btn btn-dark">
            <i className="las la-money-check mr-1"></i>Continue To Checkout
          </Link>
        </ModalBody>
      </Modal>
    </div>
    </>
  );
}
