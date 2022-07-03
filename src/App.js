import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Button, Navbar, Container, Nav, NavDropdown, Form, Row, Col } from "react-bootstrap";
import "./App.css";
import { data } from "./data.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import { Detail } from "./routes/Detail";
import Cart from "./routes/Cart";
import axios from "axios";

function App() {
  let [shoes, setShoes] = useState(data);
  let [count, setCount] = useState(0);
  let [load, setLoad] = useState(false);
  let [재고] = useState([10, 11, 12]);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="light" variant="light" className="navbar">
        <Container>
          <Navbar.Brand href="/">UKSHOP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/about");
              }}
            >
              About
            </Nav.Link>

            <Nav.Link
              onClick={() => {
                navigate("/cart");
              }}
            >
              Cart
            </Nav.Link>
            <NavDropdown title="Event" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/event/one">Event One</NavDropdown.Item>
              <NavDropdown.Item href="/event/two">Event Two</NavDropdown.Item>
            </NavDropdown>
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
              <Container>
                <Row>
                  {shoes.map((shoes, i) => {
                    return <Card shoes={shoes} i={i} />;
                  })}
                </Row>
              </Container>
              {load == true ? <div>로딩중~</div> : null}
              <button
                onClick={() => {
                  if (count == 0) {
                    axios
                      .get("https://codingapple1.github.io/shop/data2.json")
                      .then((data) => {
                        setLoad(false);
                        let arr = [...shoes, ...data.data];
                        setShoes(arr);
                        setCount(count + 1);
                      })
                      .catch(() => {
                        setLoad(false);
                        console.log("GET 요청 실패");
                      });
                  } else if (count == 1) {
                    axios
                      .get("https://codingapple1.github.io/shop/data3.json")
                      .then((data) => {
                        setLoad(false);
                        let arr = [...shoes, ...data.data];
                        setShoes(arr);
                        setCount(count + 1);
                      })
                      .catch(() => {
                        setLoad(false);
                        console.log("GET 요청 실패");
                      });
                  } else {
                    setLoad(false);
                    alert("더이상 상품이 없습니다.");
                  }
                }}
              >
                더보기
              </button>
            </>
          }
        />
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img src={"https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"} width="80%" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>

      <Button href={"/detail/" + props.shoes.id}>상세보기</Button>
    </div>
  );
}

export default App;
