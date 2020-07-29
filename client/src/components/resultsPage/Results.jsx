import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import ResultNavbar from "./ResultsNavbar";
import "./Results.css";

const Result = () => {
  let imageArray = [
    "/assets/next.png",
    "/assets/bckgrnd.jpeg",
    "/assets/bckgrnd.jpg",
    "/assets/drivingTestTips.jpg",
    "/assets/next.png",
    "/assets/bckgrnd.jpeg",
    "/assets/bckgrnd.jpg",
    "/assets/drivingTestTips.jpg",
    "/assets/next.png",
    "/assets/bckgrnd.jpeg",
    "/assets/bckgrnd.jpg",
    "/assets/drivingTestTips.jpg",
    "/assets/next.png",
    "/assets/bckgrnd.jpeg",
    "/assets/bckgrnd.jpg",
    "/assets/drivingTestTips.jpg",
    "/assets/next.png",
    "/assets/bckgrnd.jpeg",
    "/assets/bckgrnd.jpg",
    "/assets/drivingTestTips.jpg",
    "/assets/next.png",
    "/assets/bckgrnd.jpeg",
    "/assets/bckgrnd.jpg",
    "/assets/drivingTestTips.jpg",
    "/assets/next.png",
  ];

  return (
    <div className="result-part">
      <ResultNavbar />
      <Row className="picture-part">
        {imageArray.map((image, id) => (
          <Col
            key={id}
            xs={5}
            md={3}
            lg={2}
            className="m-4 p-1"
            style={{
              border: "groove 3px red",
            }}
            // style={{ border: isCorrect ? "groove 3px green" : "groove 3px red" }}
          >
            <Row className="justify-content-center">{id + 1}</Row>
            <Row className="justify-content-center">
              <Link to="/oneResultPage">
                <Image
                  key={id}
                  src={image}
                  height="180px"
                  width="180px"
                  className="p-2"
                />{" "}
              </Link>
            </Row>
            <Row className="justify-content-center">False</Row>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Result;
