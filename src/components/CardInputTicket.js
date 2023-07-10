import React from "react";
// inport image
import transferLogo from "../assets/img/icon-data-transfer.png";
import trainLogoSide from "../assets/img/icon-train.png";
import rectangle from "../assets/img/Rectangle-tiket.png";

import {
  Col,
  Container,
  Form,
  Row,
  Button,
  Dropdown,
  ButtonGroup,
} from "react-bootstrap";

function CardInputTicket() {
  return (
    <>
      <Container
        className="bg-body rounded shadow-lg"
        style={{ marginTop: "-30px" }}
      >
        <Row>
          <Col xs={3} className="bg-body-secondary rounded-start">
            <div
              className="d-flex align-items-center bg-body  mt-4"
              style={{ width: "100vw", marginLeft: "-12px" }}
            >
              <img
                src={rectangle}
                alt="sisikirikotak"
                style={{ width: "5px", height: "30px" }}
              />
              <img
                src={trainLogoSide}
                alt="logo kereta"
                style={{ width: "25px", height: "20px" }}
              />
              <h3 className="fs-5">Tiket Kereta Api</h3>
            </div>
          </Col>
          <Col xs={4} className="bg-body p-4">
            <Row>
              <h3>Tiket Kereta Api</h3>
            </Row>
            <Row>
              <Form.Group xs="4" className="p-2">
                <Form.Label>Asal</Form.Label>
                <Form.Control type="text" placeholder="Jakarta" />
              </Form.Group>
              <Form.Group as={Col} xs="6" className="mt-3">
                <Form.Label>Tanggal Berangkat</Form.Label>
                <Form.Control type="date" />
              </Form.Group>
              <Form.Group as={Col} xs="6" className="mt-3">
                <Form.Check label="Pulang Pergi" />
              </Form.Group>
            </Row>
          </Col>
          <Col xs={1} className="d-flex align-items-center">
            <Button
              className="bg-danger bg-gradient rounded-pill p-3"
              style={{ border: "none" }}
            >
              <img src={transferLogo} alt="contoh gambar" />
            </Button>
          </Col>

          <Col xs={4} className="p-4">
            <Form.Group className="pt-5">
              <Form.Label>Tujuan</Form.Label>
              <Form.Control type="text" placeholder="Surabaya" />
            </Form.Group>
            <Row className="mt-4">
              <Col>
                <Form.Label>Dewasa</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </Form.Select>
              </Col>
              <Col>
                <Form.Label>Bayi</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </Form.Select>
              </Col>
              <Col className="">
                <Button className="bg-danger bg-gradient">
                  <p>Cari Ticket</p>
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CardInputTicket;
