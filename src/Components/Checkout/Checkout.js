import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { UserContext } from "../../App";
import Navbar from "../Navbar/Navbar";
import "./Checkout.css";

const Checkout = () => {
  const { bookId } = useParams();
  const [selectedBook, setSelectedBook] = useState([]);
  useEffect(() => {
    fetch("https://mysterious-island-49555.herokuapp.com/book/" + bookId)
      .then((res) => res.json())
      .then((data) => {
        setSelectedBook(data);
      });
  }, [bookId]);

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const handleClick = () => {
    const orderDetails = {
      ...loggedInUser,
      bookInformation: selectedBook,
      orderTime: new Date(),
    };
    fetch("https://mysterious-island-49555.herokuapp.com/addOrder", {
      method: "POST",
      body: JSON.stringify(orderDetails),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("your order placed successfully");
        }
      });
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="container checkout">
        <h1 className="checkoutHeader">Checkout</h1>
        <div>
          <table className="table table-striped table-hover shadow p-3 mb-5 bg-body rounded">
            <thead>
              <tr>
                <th scope="col">Description</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row">{selectedBook.book}</td>
                <td>1</td>
                <td>${selectedBook.price}</td>
              </tr>
            </tbody>
          </table>
          <button
            type="button"
            className="btn btn-success checkoutButton"
            onClick={handleClick}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
