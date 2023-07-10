import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logoBanner from "../assets/img/Iklan.png";

const Banner = () => {
  return (
    <>
      <div className="bg-danger bg-gradient" style={{ height: "300px" }}>
        <Container>
          <Row className="pt-4">
            <Col className="text-white">
              <h3>Selamat Pagi, Ticket Seekers !</h3>
              <p>Ingin Pulkam dengan Good Deal?</p>
              <p>Masuk atau Daftar Sekarang!!</p>
            </Col>
            <Col>
              <img
                src={logoBanner}
                style={{ width: "500px", height: "200px" }}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Banner;
