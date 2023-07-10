import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

// import image
import LogoName from "../../assets/img/Land-Tick.png";
import LogoTrain from "../../assets/img/train-facing-right 1.png";

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

const DetailTick = () => {
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
          <Col className="text-end">
            <div className="d-flex align-items-center justify-content-end ">
              <img
                src={LogoName}
                style={{
                  width: "50px",
                  height: "15px",
                  marginRight: "5px",
                }}
              />
              <img src={LogoTrain} style={{ width: "30px", height: "30px" }} />
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

        {/* bagian pemberitahuan */}
        <Row
          className=" border-top border-bottom p-3"
          style={{ fontSize: "12px" }}
        >
          <Col>
            <div className="d-flex gap-3 align-items-center justify-items-center">
              <img src={PassIcon} />
              <p>
                Tunjukkan e-ticket dan identitas para penumpang saat checkin
              </p>
            </div>
          </Col>
          <Col>
            <div className="d-flex gap-3 align-items-center justify-items-center">
              <img src={ClockIcon} />
              <p>
                Check-in <span>paling lambat 90 menit</span> sebelum
                keberangkatan
              </p>
            </div>
          </Col>
          <Col>
            <div className="d-flex gap-3 align-items-center justify-items-center">
              <img src={WarningIcon} />
              <p>Waktu tertera adalah waktu stasiun setempat</p>
            </div>
          </Col>
        </Row>

        {/* identitas pemesanan */}
        <Row className="p-3">
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
      </div>
    </>
  );
};

export default DetailTick;
