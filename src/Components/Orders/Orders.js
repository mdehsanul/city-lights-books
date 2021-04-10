import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import Navbar from "../Navbar/Navbar";

const Oders = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const { name, email } = { ...loggedInUser };
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch(
      "https://mysterious-island-49555.herokuapp.com/orderDetail?email=" +
        loggedInUser.email
    )
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        console.log(data);
      });
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <h1>{orders.orderTime}</h1>
      <div className="container  checkout">
        <table className="table table-striped table-hover shadow p-3 mb-5 bg-body rounded table-bordered border-primary">
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Email</th>
              <th>Total order</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row" scope="row">
                {name}
              </td>
              <td>{email}</td>
              <td>{orders.length}</td>
            </tr>
          </tbody>
        </table>
        <table className="table table-striped table-hover shadow p-3 mb-5 bg-body rounded table-bordered border-primary">
          <thead>
            <tr>
              <th scope="col">Book Name</th>
              <th scope="col">Author</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
              <th scope="col">Order Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr>
                <td scope="row">{order.bookInformation.book}</td>
                <td>{order.bookInformation.author}</td>
                <td> 1</td>
                <td>$ {order.bookInformation.price}</td>
                <td>{new Date(order.orderTime).toDateString("dd/MM/yyyy")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Oders;
