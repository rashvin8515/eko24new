import React from "react";
import Page_Heading from "../Components/PageHeading/PageHeading";
import {
    Container,
    Col,
    Row,
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    ListGroup,
    ListGroupItem,
} from "reactstrap";
import { useSelector } from "react-redux";

function CheckOut() {
    const cart = useSelector((state) => state.products.cart);

    const firstBreadcrumb = { label: "Pages", link: "/product-checkout" };
    const secondBreadcrumb = {
        label: "Product Checkout",
        link: "/product-checkout",
        active: true,
    };
    function calculateSubtotal() {
        let subtotal = 0;
        cart.forEach((item) => {
            subtotal += item.quantity * item.salePrice;
        });
        return subtotal.toFixed(2);
    }
    let shipping = 50.0;
    let total = 0;

    // function calculateTotal() {
    //     // if (cart.length() === 0) {
    //     //     const total = 0
    //     // }
    //     const subtotal = calculateSubtotal();
    //     }
    //     const total = parseFloat(subtotal) + parseFloat(shipping);

    //     return total.toFixed(2);
    // }
    function calculateTotal() {
        if (cart.length === 0) {
            return 0; // Return 0 if the cart is empty
        }

        const subtotal = calculateSubtotal();
        const total = parseFloat(subtotal) + parseFloat(shipping);
        return total.toFixed(2);
    }

    return (
        <div>
            <div className="page-wrapper">
                <Page_Heading
                    title="Product Checkout"
                    firstBreadcrumb={firstBreadcrumb}
                    secondBreadcrumb={secondBreadcrumb}
                />
                <div className="page-content">
                    <section>
                        <Container>
                            <Row>
                                <Col lg={7} md={12}>
                                    <div className="checkout-form">
                                        <h2 className="mb-4">Billing Details</h2>
                                        <Form>
                                            <Row form>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label for="fname" className="font-w-6">
                                                            First Name
                                                        </Label>
                                                        <Input
                                                            type="text"
                                                            id="fname"
                                                            placeholder="Your firstname"
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label for="lname" className="font-w-6">
                                                            Last Name
                                                        </Label>
                                                        <Input
                                                            type="text"
                                                            id="lname"
                                                            placeholder="Your lastname"
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label for="email" className="font-w-6">
                                                            E-mail Address
                                                        </Label>
                                                        <Input
                                                            type="text"
                                                            id="email"
                                                            placeholder="State Province"
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label for="phone" className="font-w-6">
                                                            Phone Number
                                                        </Label>
                                                        <Input type="text" id="phone" placeholder="" />
                                                    </FormGroup>
                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label for="companyname" className="font-w-6">
                                                            Company Name
                                                        </Label>
                                                        <Input
                                                            type="text"
                                                            id="companyname"
                                                            placeholder="Company Name"
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label for="country" className="font-w-6">
                                                            Select Country
                                                        </Label>
                                                        <Input
                                                            type="select"
                                                            id="country"
                                                            className="form-control"
                                                        >
                                                            <option>Select country</option>
                                                            <option value="#">Alaska</option>
                                                            <option value="#">China</option>
                                                            <option value="#">Japan</option>
                                                            <option value="#">Korea</option>
                                                            <option value="#">Philippines</option>
                                                        </Input>
                                                    </FormGroup>
                                                </Col>
                                                <Col md={12}>
                                                    <FormGroup>
                                                        <Label for="address" className="font-w-6">
                                                            Address
                                                        </Label>
                                                        <Input
                                                            type="text"
                                                            id="address"
                                                            placeholder="Enter Your Address"
                                                        />
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <Input
                                                            type="text"
                                                            id="address2"
                                                            placeholder="Second Address"
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                <Col md={12}>
                                                    <FormGroup>
                                                        <Label for="towncity" className="font-w-6">
                                                            Town/City
                                                        </Label>
                                                        <Input
                                                            type="text"
                                                            id="towncity"
                                                            placeholder="Town or City"
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label for="statename" className="font-w-6">
                                                            State/Province
                                                        </Label>
                                                        <Input
                                                            type="text"
                                                            id="statename"
                                                            placeholder="State Province"
                                                        />
                                                    </FormGroup>{" "}
                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label for="zippostalcode" className="font-w-6">
                                                            Zip/Postal Code
                                                        </Label>
                                                        <Input
                                                            type="text"
                                                            id="zippostalcode"
                                                            placeholder="Zip / Postal"
                                                        />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </div>
                                </Col>
                                <Col lg={5} md={12} className="mt-5 mt-lg-0">
                                    <Row className="my-5">
                                        <Col md={12}>
                                            <div className="p-3 p-lg-5 shadow-sm mb-5">
                                                <h3 className="mb-3">Coupon Code</h3>
                                                <label className="mb-3">
                                                    Enter your coupon code if you have one
                                                </label>
                                                <div className="d-flex align-items-center">
                                                    <Input
                                                        className="form-control"
                                                        id="c-code"
                                                        placeholder="Coupon Code"
                                                        aria-label="Coupon Code"
                                                        aria-describedby="button-addon2"
                                                        type="text"
                                                    />
                                                    <div className="input-group-append ms-3">
                                                        <Button
                                                            color="primary"
                                                            type="button"
                                                            id="button-addon2"
                                                        >
                                                            Apply
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-3 p-lg-5 shadow-sm mb-5">
                                                <h3 className="mb-3">Your Order</h3>
                                                <ListGroup className="list-unstyled">
                                                    {cart.map((item, index) => (
                                                        <ListGroupItem
                                                            className="mb-3 pb-3"
                                                            key={index}
                                                            style={{
                                                                borderLeft: 'none',
                                                                borderRight: 'none',
                                                                borderTop: 'none'
                                                            }}
                                                        >
                                                            <span>
                                                                {item.quantity} x {item.name}
                                                            </span>
                                                            {" "} ${item.salePrice * item.quantity}
                                                        </ListGroupItem>
                                                    ))}
                                                    <ListGroupItem className="mb-3  pb-3" style={{
                                                        borderLeft: 'none',
                                                        borderRight: 'none',
                                                        borderTop: 'none'
                                                    }}>
                                                        <span>Shipping</span> $ {shipping}
                                                    </ListGroupItem>
                                                    <ListGroupItem className="mb-3 pb-3" style={{
                                                        borderLeft: 'none',
                                                        borderRight: 'none',
                                                        borderTop: 'none'
                                                    }}>
                                                        <span>Subtotal</span> $ {calculateSubtotal()}
                                                    </ListGroupItem>
                                                    <ListGroupItem style={{
                                                        borderLeft: 'none',
                                                        borderRight: 'none',
                                                        borderTop: 'none'
                                                    }}>
                                                        <span>
                                                            <strong className="cart-total">Total:</strong>
                                                        </span>
                                                        <strong className="cart-total">
                                                            $ {calculateTotal()}
                                                        </strong>
                                                    </ListGroupItem>
                                                </ListGroup>
                                            </div>
                                            <div class="cart-detail my-5">
                                                <h3 class="mb-3">Payment Method</h3>
                                                <div class="form-group">
                                                    <div class="custom-control custom-radio">
                                                        <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input" />
                                                        <label class="custom-control-label" for="customRadio1">Direct Bank Tranfer</label>
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <div class="custom-control custom-radio">
                                                        <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input" />
                                                        <label class="custom-control-label" for="customRadio2">Check Payment</label>
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <div class="custom-control custom-radio">
                                                        <input type="radio" id="customRadio3" name="customRadio" class="custom-control-input" />
                                                        <label class="custom-control-label" for="customRadio3">Paypal Account</label>
                                                    </div>
                                                </div>
                                                <div class="form-group mb-0">
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input" id="customCheck1" />
                                                        <label class="custom-control-label" for="customCheck1">I have read and accept the terms and conditions</label>
                                                    </div>
                                                </div>
                                                <button class="btn btn-primary btn-animated btn-block">Proceed to Payment</button>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default CheckOut;
