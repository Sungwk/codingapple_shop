import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Button, Navbar, Container, Nav, NavDropdown, Form, Row, Col } from "react-bootstrap";
import "./App.css";
import { data } from "./data.js";
function App() {
  let [shoes] = useState(data);
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
            {shoes.map((shoe) => {
              return <Card shoe={shoe} />;
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
}

function Card(props) {
  return (
    <Col>
      <div>
        <img src={props.shoe.img} width="80%"></img>
        <h4>{props.shoe.title}</h4>
        <div>{props.shoe.price}</div>
      </div>
    </Col>
  );
}

export default App;
