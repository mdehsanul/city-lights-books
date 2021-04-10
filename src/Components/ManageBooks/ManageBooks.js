import React, { useEffect, useState } from "react";
import Admin from "../AdminPanel/AdminPanel";

const ManageBooks = () => {
  const [bookDetail, setBookDetail] = useState([]);
  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = () => {
    fetch("https://mysterious-island-49555.herokuapp.com/bookDetail")
      .then((res) => res.json())
      .then((data) => {
        setBookDetail(data);
      });
  };

  // Delete Book
  const deleteBook = (id) => {
    fetch(`https://mysterious-island-49555.herokuapp.com/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((ressult) => {
        // console.log("deted successfully");
        // refresh the page without loading
        loadBooks();
      });
  };
  return (
    <div>
      <Admin></Admin>
      <div className="main">
        <h1>Manage books</h1>
        <div>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">Book Name</th>
                <th scope="col">Author Name</th>
                <th scope="col">Price</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {bookDetail.map((bookDetail) => (
                <tr key={bookDetail._id}>
                  <th scope="row">{bookDetail.book}</th>
                  <td>{bookDetail.author}</td>
                  <td>{bookDetail.price}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => deleteBook(bookDetail._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageBooks;
