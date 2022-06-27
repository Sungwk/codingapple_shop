import { Nav } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import "../App.css";

const Detail = (props) => {
  let [alert, setAlert] = useState(true);
  let [tabNum, setTabNum] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  });

  let { id } = useParams();
  let shoes = props.shoes.find((shoes) => shoes.id == id);
  return (
    <div className="container">
      {alert == true ? (
        <div className="alert alert-warning" id="alert">
          2초 이내 구매시 할인
        </div>
      ) : null}
      <div className="row">
        <div className="col-md-6">
          <img src={"https://codingapple1.github.io/shop/shoes" + (id * 1 + 1) + ".jpg"} width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{shoes.title}</h4>
          <p>{shoes.content}</p>
          <p>{shoes.price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            eventKey="link0"
            onClick={() => {
              setTabNum(0);
            }}
          >
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link1"
            onClick={() => {
              setTabNum(1);
            }}
          >
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link2"
            onClick={() => {
              setTabNum(2);
            }}
          >
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Tab tabNum={tabNum} />
    </div>
  );
};

function Tab({ tabNum }) {
  let [fade, setFade] = useState("");

  useEffect(() => {
    let a = setTimeout(() => {
      setFade("end");
    }, 500);
    return () => {
      clearTimeout(a);
      setFade("");
    };
  }, [tabNum]);
  return <div className={`start ${fade}`}>{[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tabNum]}</div>;
}

export { Detail };
