import { useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { plusCount, plusAge } from "../store";

function Cart() {
  let state = useSelector((state) => state);
  let dispatch = useDispatch();
  return (
    <div>
      <h2>{state.user.name}의 장바구니</h2>
      <button
        onClick={() => {
          dispatch(plusAge(2));
        }}
      >
        {state.user.age}
      </button>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {state.cartItem.map((item, i) => {
            return (
              <tr>
                <th>{item.id}</th>
                <th>{item.name}</th>
                <th>{item.count}</th>
                <th>
                  <button
                    onClick={() => {
                      dispatch(plusCount(item.id));
                    }}
                  >
                    +
                  </button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
