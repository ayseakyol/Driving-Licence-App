import React, { useState } from "react";
import { Image, Row, Col, Container } from "react-bootstrap";
import "./FreeTest.css";
import TestNavbar from "./TestNavbar";

const question = {
  totalNumber: 25,
  image: "/assets/test-2/1/2015_01_27_03_26_0820141205_123346.jpg",
  situation:
    "You are driving at 80 km/h, outside a built-up area. The lorry, in front of you, is driving 70km/h. There is a free rear view. What will you do?",
  question1: "I speed up to 90 km/h and overtake the lorry, straight away?",
  question2:
    "I continue at the same speed of 80 km/h and overtake the lorry, straight away?",
  question3: "I slow down and wait a bit to overtake the lorry?",
  question4: "I stop?",
};

const FreeTest = () => {
  //const [showNextQuestion, setShowNextQuestion] = useState(false);
  //const onClick = () => setShowNextQuestion(true);

  return (
    <>
      <TestNavbar />
      <Container className="free-test">
        <Row className="test-part">
          <Col xs={1}></Col>
          <Col xs={8} md={9}>
            <Image
              src={question.image}
              rounded
              className="image-situation  my-2"
            />
          </Col>
          <Col xs={1} md={2}>
            <Image
              src="/assets/next2.jpeg"
              roundedCircle
              className="next-button"
            />
          </Col>
        </Row>
        <Col>
          <Row className="situation pl-2">
            <h3>{question.situation}</h3>
            {/* {renderError()} */}
          </Row>
          <Row>
            <Col className="questions" xs={8} md={10}>
              <h4>{question.question1}</h4>
            </Col>
            <div className="form-check form-check-inline check-box" xs={1}>
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
                //onClick={onClick}
              />
              {/* {showNextQuestion ? <Results /> : null} */}
              <label className="form-check-label" for="inlineRadio1">
                Yes
              </label>
            </div>
            <div className="form-check form-check-inline check-box" xs={1}>
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
              />
              <label className="form-check-label" for="inlineRadio2">
                No
              </label>
            </div>
          </Row>
          <Row>
            <Col className="questions" xs={8} md={10}>
              <h4>{question.question3}</h4>
            </Col>
            <div className="form-check form-check-inline check-box" xs={1}>
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
              />
              <label className="form-check-label" for="inlineRadio1">
                Yes
              </label>
            </div>
            <div className="form-check form-check-inline check-box" xs={1}>
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
              />
              <label className="form-check-label" for="inlineRadio2">
                No
              </label>
            </div>
          </Row>
          <Row>
            <Col className="questions" xs={8} md={10}>
              <h4>{question.question1}</h4>
            </Col>
            <div className="form-check form-check-inline check-box" xs={1}>
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
              />
              <label className="form-check-label" for="inlineRadio1">
                Yes
              </label>
            </div>
            <div className="form-check form-check-inline check-box" xs={1}>
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
              />
              <label className="form-check-label" for="inlineRadio2">
                No
              </label>
            </div>
          </Row>
          <Row>
            <Col className="questions" xs={8} md={10}>
              <h4>{question.question4}</h4>
            </Col>
            <div className="form-check form-check-inline check-box" xs={1}>
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
              />
              <label className="form-check-label" for="inlineRadio1">
                Yes
              </label>
            </div>
            <div className="form-check form-check-inline check-box" xs={1}>
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
              />
              <label className="form-check-label" for="inlineRadio2">
                No
              </label>
            </div>
          </Row>
        </Col>
      </Container>
    </>
  );
};

export default FreeTest;
