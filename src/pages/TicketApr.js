import React, { useState } from "react";
import { Container, Card, Row, Col, Button, Modal } from "react-bootstrap";

// import image
import LogoName from "../assets/img/Land-Tick.png";
import LogoTrain from "../assets/img/train-facing-right 1.png";

//image depart to arrv
import DepartCirc from "../assets/img/Ellipse 7.png";
import ArrivCirc from "../assets/img/Ellipse 8.png";
import linDepArr from "../assets/img/Line 9.png";

//image Qr
import QrCode from "../assets/img/Qr.png";
import DetailTick from "../components/Modal/DetailTick";
import Footer from "../components/Footer";
import Navigation from "../components/navigations/Navigation";

const TicketApr = () => {
  // for detail popup
  const [show, setShow] = useState(false);

  // for detail popup
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div>
        <Navigation />
        <Container className="mt-4" style={{ height: "80vh" }}>
          <h3 className="fw-bold">Tiket Saya</h3>

          <Button
            className="bg-body w-100"
            style={{ border: "none" }}
            onClick={handleShow}
          >
            <Container>
              <Card>
                <Card.Body>
                  <Row>
                    <Col xs={9}>
                      <Row>
                        <div className="d-flex align-items-center">
                          <img
                            src={LogoName}
                            style={{
                              width: "50px",
                              height: "15px",
                              marginRight: "5px",
                            }}
                          />
                          <img
                            src={LogoTrain}
                            style={{ width: "30px", height: "30px" }}
                          />
                        </div>
                      </Row>
                      <Row>
                        <Col xs={3} className="ms-4">
                          <Row>
                            <p className="fs-4 fw-bolder">Argo Wilis</p>
                          </Row>
                          <Row>
                            <p>Eksekutif (H)</p>
                          </Row>
                          <Row className="ms-4">
                            <p
                              className="p-1 border w-50 text-center rounded"
                              style={{
                                color: "#0BDC5F",
                                backgroundColor: "",
                              }}
                            >
                              Approve
                            </p>
                          </Row>
                        </Col>

                        <Col xs={4} className="d-flex justify-items-center">
                          <div className="text-center pt-2 pe-5">
                            <div className="m-1">
                              <img
                                src={DepartCirc}
                                style={{ width: "20px", height: "20px" }}
                              />
                            </div>
                            <div className="m-1">
                              <img
                                src={linDepArr}
                                style={{ width: "5px", height: "80px" }}
                              />
                            </div>
                            <div className="m-1">
                              <img
                                src={ArrivCirc}
                                style={{ width: "20px", height: "20px" }}
                              />
                            </div>
                          </div>

                          <Col>
                            <Row className="mb-4">
                              <p>05.00</p>
                              <p className="fw-light fs-6">21 Februari 2020</p>
                            </Row>
                            <Row>
                              <p>10.05</p>
                              <p className="fw-light fs-6">21 Februari 2020</p>
                            </Row>
                          </Col>
                        </Col>
                        <Col xs={3}>
                          <Row className="mb-4">
                            <p>Jakarta (GMR)</p>
                            <p className="fw-light fs-6">Stasiun Gambir</p>
                          </Row>
                          <Row>
                            <p>Surabaya (SBY)</p>
                            <p className="fw-light fs-6">Stasiun Surabaya</p>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                    <Col xs={3} className="text-end">
                      <div>
                        <p className="fs-3 fw-bolder">Kereta Api</p>
                      </div>
                      <div>
                        <p className="fw-lighter">
                          <span className="fw-bold">Saturday</span>, 21 Februari
                          2020
                        </p>
                      </div>
                      <div className="me-5 mt-4">
                        <img src={QrCode} />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={10}>
                      <Card.Header className="bg-body">
                        <Row>
                          <Col>No. Tanda Pengenal</Col>
                          <Col>Nama Pemesanan</Col>
                          <Col>No. Handphone</Col>
                          <Col>Email</Col>
                        </Row>
                      </Card.Header>
                      <Card.Body>
                        <Row className="fw-lighter">
                          <Col>31175033003970001</Col>
                          <Col>Anto</Col>
                          <Col>083896833112</Col>
                          <Col>Anto@gmail.com</Col>
                        </Row>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Container>
          </Button>

          {/* this is for regist popup */}
          <Modal size="lg" show={show} onHide={handleClose}>
            <Modal.Body closeButton>
              <DetailTick />
            </Modal.Body>
          </Modal>
        </Container>

        <Footer />
      </div>
    </>
  );
};
export default TicketApr;
