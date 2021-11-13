import React from "react";

// reactstrap components
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";

function RegisterPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("register-page");
    return function cleanup() {
      document.body.classList.remove("register-page");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <div
        className="page-header"
        style={{
          backgroundImage:
            "url(" + require("assets/img/login-image.jpg").default + ")",
        }}
      >
        <div className="filter" />
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" lg="4">
              <Card className="card-register ml-auto mr-auto">
                <h3 className="title mx-auto">For Bookings</h3>
                <div className="social-line text-center">
                  
                </div>
                <Form className="register-form">
                  <label>Artist Name</label>
                  <Input placeholder="Artist" type="text" />
                  <label>Date</label>
                  <Input placeholder="Date" type="date" />
                  <Button block className="btn-round" color="danger">
                    Register
                  </Button>
                </Form>
                
              </Card>
            </Col>
          </Row>
        </Container>
        <div className="footer register-footer text-center">
          <h6>
            © {new Date().getFullYear()}, made with{" "}
            <i className="fa fa-heart heart" />
          </h6>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
