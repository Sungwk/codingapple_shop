import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Button, Navbar, Container, Nav, NavDropdown, Form, Row, Col } from "react-bootstrap";
import "./App.css";

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">UKSHOP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
            <Nav.Link href="#pricing">MyPage</Nav.Link>
            <NavDropdown title="Category" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">New</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Best</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Men</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Women</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Bag&Acc</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Life</NavDropdown.Item>
            </NavDropdown>
            <Form className="d-flex search">
              <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Nav>
        </Container>
      </Navbar>
      <div className="main-bg"></div>
      <div>
        <Container>
          <Row>
            <Col>
              <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%"></img>
              <h4>상품명</h4>
              <div>상품설명</div>
            </Col>
            <Col>
              <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="80%"></img>
              <h4>상품명</h4>
              <div>상품설명</div>
            </Col>
            <Col>
              <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="80%"></img>
              <h4>상품명</h4>
              <div>상품설명</div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
