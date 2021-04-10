import React, { useState } from "react";
import "./AddBooks.css";
import Admin from "../AdminPanel/AdminPanel";
import { useForm } from "react-hook-form";
import axios from "axios";

const AddBooks = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [imageURL, setImageURL] = useState(null);
  const onSubmit = (data) => {
    const eventData = {
      book: data.book,
      author: data.author,
      price: data.price,
      imageURL: imageURL,
    };

    fetch("https://mysterious-island-49555.herokuapp.com/addBook", {
      method: "POST",
      body: JSON.stringify(eventData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((res) => console.log("server side response"));
    console.log(eventData);
  };

  const handleImageUpload = (event) => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "f3b60d77ed5006098cf9fb644caf2530");
    imageData.append("image", event.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleBook = () => {
    alert("Book Added");
  };
  return (
    <div>
      <Admin></Admin>
      <div className="main">
        <div className="header">
          <h1>Add book</h1>
        </div>
        <div>
          <form
            method="POST"
            onSubmit={handleSubmit(onSubmit)}
            className="book-form"
          >
            <h3>Book Name</h3>
            <input
              name="book"
              // defaultValue="book name"
              {...register("book", { required: true })}
              placeholder="book name"
              className="book-input"
            />
            {errors.book && (
              <span className="error">book name is required</span>
            )}
            <h3>Author Name</h3>
            <input
              name="author"
              // defaultValue="author name"
              {...register("author", { required: true })}
              placeholder="author name"
              className="book-input"
            />
            {errors.author && (
              <span className="error">author name is required</span>
            )}
            <h3>Add Price</h3>
            <input
              name="price"
              // defaultValue="price"
              {...register("price", { required: true })}
              placeholder="price"
              className="book-input"
            />
            {errors.price && <span className="error">price is required</span>}
            <h3>Add Book Cover Photo:</h3>
            <input
              name="image"
              type="file"
              onChange={handleImageUpload}
              className="book-image"
            />

            <input
              type="submit"
              value="save"
              className="saveButton"
              onClick={handleBook}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBooks;
