import React from "react";
import "./ContactPart.css";
import { Container, Col, Row } from "react-bootstrap";

const ContactPart = () => {
  return (
    <Container className="contact-part">
      <Row className="parts">
        <Col xs={{ span: "11", offset: "1" }} sm={5}>
          <Row>
            <Col>
              <i className="fas fa-home"></i>
              <h2>Mailing Address</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                WebWinners Driving School
                <br />
                Boulevard Théo Lambert 75,
                <br />
                1070 Anderlecht
              </p>
            </Col>
          </Row>
        </Col>

        <Col xs={{ span: "11", offset: "1" }} sm={5}>
          <Row>
            <Col>
              <i className="fas fa-comment"></i>
              <h2>Social</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                <a href="www.linkedin.com/webwinners">
                  <i
                    className="fab fa-linkedin"
                    style={{ fontSize: "36px" }}
                  ></i>
                </a>
                <a href="www.github.com/webwinners">
                  <i
                    class="fab fa-github-square"
                    style={{ fontSize: "36px" }}
                  ></i>
                </a>
                <a href="www.facebook.com/webwinners">
                  <i
                    class="fab fa-facebook-square"
                    style={{ fontSize: "36px" }}
                  ></i>
                </a>
                <a href="www.google.com/webwinners">
                  <i
                    class="fab fa-google-plus-square"
                    style={{ fontSize: "36px" }}
                  ></i>
                </a>
                <a href="www.twitter.com/webwinners">
                  <i
                    class="fab fa-twitter-square"
                    style={{ fontSize: "36px" }}
                  ></i>
                </a>
              </p>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="parts">
        <Col xs={{ span: "11", offset: "1" }} sm={5}>
          <Row>
            <Col>
              <i className="fas fa-envelope"></i>
              <h2>Email</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                <a href="/">info@webwinners.be</a>
              </p>
            </Col>
          </Row>
        </Col>
        <Col xs={{ span: "11", offset: "1" }} sm={5}>
          <Row>
            <Col>
              <i className="fas fa-phone"></i>
              <h2>Phone</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>(032) 123-0000</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPart;
