import React from 'react'
import Page_Heading from '../Components/PageHeading/PageHeading'
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';


function SignUp() {
    const firstBreadcrumb = { label: "Pages" };
    const secondBreadcrumb = {
        label: "Sign Up",
        active: true,
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
    };

    return (
        <div className='page-wrapper'>
            <Page_Heading
                title="Sign Up"
                firstBreadcrumb={firstBreadcrumb}
                secondBreadcrumb={secondBreadcrumb}
            />
            <div className='page-content'>
                <section>
                    <Container>
                        <div class="row justify-content-center text-center">
                            <div class="col-lg-8 col-md-12">
                                <div class="mb-6">
                                    <h6 class="text-primary mb-1">
                                        — Sign Up
                                    </h6>
                                    <h2>Simple And Easy To Sign Up</h2>
                                    <p class="lead">We use the latest technologies it voluptatem accusantium doloremque laudantium, totam
                                        rem aperiam.</p>
                                </div>
                            </div>
                        </div>
                        <Row>
                            <Col lg={8} md={10} className='ml-auto mr-auto'>
                                <div className='register-form text-center'>
                                    <Form id="contact-form" onSubmit={handleSubmit}>
                                        <div className="messages"></div>
                                        <Container>
                                            <Row>
                                                <Col md={6}>
                                                    <FormGroup>

                                                        <Input type="text" name="name" id="form_name" placeholder="First name" required />
                                                        <div className="help-block with-errors"></div>
                                                    </FormGroup>
                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup>

                                                        <Input type="text" name="surname" id="form_lastname" placeholder="Last name" required />
                                                        <div className="help-block with-errors"></div>
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Input type="email" name="email" id="form_email" placeholder="Email" required />
                                                        <div className="help-block with-errors"></div>
                                                    </FormGroup>
                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup>

                                                        <Input type="tel" name="phone" id="form_phone" placeholder="Phone" required />
                                                        <div className="help-block with-errors"></div>
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md={6}>
                                                    <FormGroup>

                                                        <Input type="password" name="password" id="form_password" placeholder="Password" required />
                                                        <div className="help-block with-errors"></div>
                                                    </FormGroup>
                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup>

                                                        <Input type="password" name="password" id="form_password1" placeholder="Confirm Password" required />
                                                        <div className="help-block with-errors"></div>
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <select class="form-control">
                                                            <option selected>Gender</option>
                                                            <option value="male">Male</option>
                                                            <option value="female">Female</option>
                                                        </select>
                                                        <div class="help-block with-errors"></div>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <select class="form-control">
                                                            <option value="Country">Select Country...</option>
                                                            <option value="AF">Afghanistan</option>
                                                            <option value="AL">Albania</option>
                                                            <option value="DZ">Algeria</option>
                                                            <option value="AS">American Samoa</option>
                                                            <option value="AD">Andorra</option>
                                                            <option value="AG">Angola</option>
                                                            <option value="AI">Anguilla</option>
                                                            <option value="AG">Antigua &amp; Barbuda</option>
                                                            <option value="AR">Argentina</option>
                                                            <option value="AA">Armenia</option>
                                                            <option value="AW">Aruba</option>
                                                            <option value="AU">Australia</option>



                                                        </select>
                                                        <div class="help-block with-errors"></div>
                                                    </div>
                                                </div>
                                            </Row>
                                            <Row className="mt-5">
                                                <Col md={12}>
                                                    <div className="remember-checkbox clearfix mb-5">
                                                        <div class="custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" id="customCheck1" />
                                                            <label class="custom-control-label" for="customCheck1">I agree to the term of use and privacy
                                                                policy</label>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md={12}>
                                                    <Button type="submit" color="primary">Create Account</Button>
                                                    <span className="mt-4 d-block">
                                                        Have an Account? <a href="login"><i>Sign In!</i></a>
                                                    </span>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Form>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>
        </div>
    )
}

export default SignUp;