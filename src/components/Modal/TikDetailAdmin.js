import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

// Import list bottom
import ClockIcon from "../../assets/img/clockIcon.png";
import PassIcon from "../../assets/img/passIcon.png";
import WarningIcon from "../../assets/img/warning.png";

//image depart to arrv
import DepartCirc from "../../assets/img/Ellipse 7.png";
import ArrivCirc from "../../assets/img/Ellipse 8.png";
import linDepArr from "../../assets/img/Line 9.png";

//image Qr
import QrCode from "../../assets/img/Qr.png";

const TikDetailAdmin = () => {
  return (
    <>
      <div>
        <Row>
          <Col>
            <div>
              <h3>E-Tiket</h3>
              <p>Kode Invoice : INV0101</p>
            </div>
          </Col>
        </Row>
        <Row className="ps-5">
          <Col>
            <Row>
              <p className="fs-4">Kereta Api</p>
              <p>Saturday, 21 Februari 2020</p>
            </Row>
            <Row>
              <Col xs={7} className="d-flex justify-items-center">
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
              <Col>
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
          {/* qr bagian kanan */}
          <Col className="text-center">
            <img src={QrCode} style={{ width: "13vw", height: "37vh" }} />
          </Col>
        </Row>

        {/* identitas pemesanan */}
        <Row className="p-3 border-top border-bottom">
          <Col>
            <Row className="fw-bold">
              <p>No. Tanda Pengenal</p>
            </Row>
            <Row>
              <p className="fw-lighter">31175033003970001</p>
            </Row>
          </Col>
          <Col>
            <Row className="fw-bold">
              <p>Nama Pemesan</p>
            </Row>
            <Row>
              <p className="fw-lighter">Anto</p>
            </Row>
          </Col>
          <Col>
            <Row className="fw-bold">
              <p>No. Handphone</p>
            </Row>
            <Row>
              <p className="fw-lighter">083896833112</p>
            </Row>
          </Col>
          <Col>
            <Row className="fw-bold">
              <p>Email</p>
            </Row>
            <Row>
              <p className="fw-lighter">Anto@gmail.com</p>
            </Row>
          </Col>
        </Row>
        <Row className="fw-bold bg-secondary-subtle p-1">
          <Col>
            <p className="fs-4">Total</p>
          </Col>
          <Col>
            <p className="text-danger text-end fs-4">Rp 250.000</p>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default TikDetailAdmin;
