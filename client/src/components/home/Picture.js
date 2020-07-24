import React from "react";
import { Container, Row, Image, Card } from "react-bootstrap";
import "./Picture.css";

const Picture = () => {
  return (
    <Container>
      <Row className="justify-content-center container m-5">
        <Image src="/assets/driversCourse.webp" xs={9} lg={12} />
        <Card className="driver-card " xs={1} lg={2}>
          <Card.Body>
            <Card.Title>Learn on your schedule</Card.Title>

            <Card.Text className="card-text">
              Anywhere, anytime.
              <br /> Prepare for your driving license today!
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default Picture;
