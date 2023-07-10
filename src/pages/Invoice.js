import React from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

// import image
import warningIcon from "../assets/img/error.png";
import LogoName from "../assets/img/Land-Tick.png";
import LogoTrain from "../assets/img/train-facing-right 1.png";
import struck from "../assets/img/struck.png";

//image Qr
import QrCode from "../assets/img/Qr.png";

//image depart to arrv
import DepartCirc from "../assets/img/Ellipse 7.png";
import ArrivCirc from "../assets/img/Ellipse 8.png";
import linDepArr from "../assets/img/Line 9.png";
import Footer from "../components/Footer";
import Navigation from "../components/navigations/Navigation";

const Invoice = () => {
  return (
    <>
      <div>
        <Navigation />
        <Container className="mt-4">
          <h3 className="fw-normal">Invoice</h3>
          <Container className="mt-4">
            <Row>
              <Col xs={8}>
                <Row className="mb-4">
                  <Card className="p-5 bg-secondary-subtle">
                    <Col className="d-flex align-items-center gap-4">
                      <div>
                        <img
                          src={warningIcon}
                          style={{ width: "50px", height: "50px" }}
                        />
                      </div>
                      <div>
                        <p>
                          Silahkan melakukan pembayaran melalui M-bangking dan
                          ATM ke No.rek Yang Tertera.
                        </p>
                        <p>No. rek : 09812312312</p>
                      </div>
                    </Col>
                  </Card>
                </Row>
                <Row className="mb-4">
                  <Card>
                    <Row className="mb-4">
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
                    </Row>
                  </Card>
                </Row>
                <Row className="mb-4">
                  <Col xs={8}>
                    <h3 className="mb-4">Rincian Harga</h3>
                    <Card>
                      <Card.Header className="bg-body p-4">
                        <Row>
                          <Col>Argo Wilis (Dewasa) x1</Col>
                          <Col>Rp. 250.000</Col>
                        </Row>
                      </Card.Header>
                      <Card.Body className="bg-secondary-subtle fs-5 fw-bolder">
                        <Row>
                          <Col>Total</Col>
                          <Col>Rp. 250.000</Col>
                        </Row>
                      </Card.Body>
                    </Card>
                    <Row className="mt-3 text-center fs-5">
                      <Link
                        to={"/logged/TikApr"}
                        className="bg-danger bg-gradient p-1 rounded"
                        style={{
                          border: "none",
                          textDecoration: "none",
                          color: "white",
                          width: "100000px",
                        }}
                      >
                        Bayar Sekarang
                      </Link>
                    </Row>
                  </Col>
                  <Col xs={3} className="mt-3">
                    <img src={struck} />
                  </Col>
                </Row>
              </Col>

              {/* bagian kanan */}
              <Col xs={4}>
                <Card>
                  <Card.Header className="bg-secondary-subtle">
                    <Row>
                      <Col xs={9}>
                        <p className="fs-4">Kereta Api</p>
                        <p>Saturday, 21 Februari 2020</p>
                      </Col>
                      <Col xs={3} className="p-2">
                        <img
                          src={QrCode}
                          style={{ width: "50px", height: "60px" }}
                        />
                      </Col>
                    </Row>
                  </Card.Header>
                  <Card.Body className="bg-body fs-5 fw-bolder">
                    <Row>
                      <Col>
                        <p>Argo Wilis</p>
                        <p className="fs-6 fw-lighter">Eksekutif (H)</p>
                      </Col>
                    </Row>
                    <Row>
                      <div className="d-flex ms-4">
                        <div className="text-center pt-2 pe-5">
                          <div className="">
                            <img
                              src={DepartCirc}
                              style={{ width: "20px", height: "20px" }}
                            />
                          </div>
                          <div className="m-1">
                            <img
                              src={linDepArr}
                              style={{ width: "3px", height: "50px" }}
                            />
                          </div>
                          <div className="">
                            <img
                              src={ArrivCirc}
                              style={{ width: "20px", height: "20px" }}
                            />
                          </div>
                        </div>
                        <Col>
                          <Row className="mb-4">
                            <p style={{ fontSize: "12px" }}>05.00</p>
                            <p
                              className="fw-light"
                              style={{ fontSize: "12px" }}
                            >
                              21 Februari 2020
                            </p>
                          </Row>
                          <Row>
                            <p style={{ fontSize: "12px" }}>10.05</p>
                            <p
                              className="fw-light"
                              style={{ fontSize: "12px" }}
                            >
                              21 Februari 2020
                            </p>
                          </Row>
                        </Col>
                        <Col>
                          <Row className="mb-4">
                            <p style={{ fontSize: "12px" }}>Jakarta (GMR)</p>
                            <p
                              className="fw-light"
                              style={{ fontSize: "12px" }}
                            >
                              Stasiun Gambir
                            </p>
                          </Row>
                          <Row>
                            <p style={{ fontSize: "12px" }}>Surabaya (SBY)</p>
                            <p
                              className="fw-light"
                              style={{ fontSize: "12px" }}
                            >
                              Stasiun Surabaya
                            </p>
                          </Row>
                        </Col>
                      </div>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </Container>
        <Footer />
      </div>
    </>
  );
};

export default Invoice;
