import React, { useEffect, useState } from "react";
import "./Home.css";
import { Card, Button, Col, Container, Row } from "react-bootstrap";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const Home = () => {
  const [bookDetail, setBookDetail] = useState([]);
  const [loading, setLoading] = useState();
  useEffect(() => {
    fetch("https://mysterious-island-49555.herokuapp.com/bookDetail")
      .then((res) => res.json())
      .then((data) => {
        setBookDetail(data);
        setLoading(true);
      });
  }, []);
  return (
    <div className="homeBackground">
      <div>
        <Navbar></Navbar>
        {loading ? (
          <Container>
            <Row className="conatinerRow">
              {bookDetail.map((bookDetail) => (
                <Col className="conatinerColumn" key={bookDetail._id}>
                  <Card className="bookCard">
                    <Card.Img src={bookDetail.imageURL} className="cardImage" />
                    <Card.Body className="bookCradBody">
                      <Card.Title>
                        <h4>{bookDetail.book}</h4>
                      </Card.Title>
                      <Card.Text>by {bookDetail.author}</Card.Text>
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <p className="price">${bookDetail.price}</p>
                        </div>
                        <div>
                          <Link to={"/checkout/" + bookDetail._id}>
                            <Button
                              variant="success"
                              style={{ width: "100px" }}
                            >
                              Buy Now
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        ) : (
          <Container>
            <Row>
              <Col>
                <Spinner
                  animation="border"
                  variant="success"
                  className="homeSpinner"
                />
              </Col>
            </Row>
          </Container>
        )}
      </div>
    </div>
  );
};

export default Home;
