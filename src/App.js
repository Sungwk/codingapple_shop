import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Button, Navbar, Container, Nav, NavDropdown, Form, Row, Col } from "react-bootstrap";
import "./App.css";
import { data } from "./data.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import { Detail } from "./routes/Detail";
function App() {
  let [shoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">UKSHOP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/detail");
              }}
            >
              Detail
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/about");
              }}
            >
              About
            </Nav.Link>
            <NavDropdown title="Event" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/event/one">Event One</NavDropdown.Item>
              <NavDropdown.Item href="/event/two">Event Two</NavDropdown.Item>
            </NavDropdown>
            <Form className="d-flex search">
              <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/detail/:id" element={<Detail shoes={shoes} />}></Route>
        <Route path="*" element={<div>없는 페이지 입니다.</div>} />
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>
              <div>
                <Container>
                  <Row>
                    {shoes.map((shoes) => {
                      return <Card shoes={shoes} />;
                    })}
                  </Row>
                </Container>
              </div>
            </>
          }
        />
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>member</div>} />
        </Route>
        <Route path="/event" element={<Event />}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path="two" element={<div>생일기념 쿠폰받기</div>} />
        </Route>
      </Routes>
    </div>
  );
}

function About() {
  return (
    <div>
      <h4>About</h4>
      <Outlet></Outlet>
    </div>
  );
}

function Event() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  );
}

function Card(props) {
  return (
    <Col>
      <div>
        <img src={props.shoes.img} width="80%"></img>
        <h4>{props.shoes.title}</h4>
        <div>{props.shoes.price}</div>
        <a href={"/detail/" + props.shoes.id}>상세보기</a>
      </div>
    </Col>
  );
}

export default App;
