import React, { useContext, useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { UserContext } from "./Context/UseContext";
import Login from "./Modal/Login";
import StatusTicket from "./Modal/StatusTik";
import Daftar from "./Modal/Daftar";

// call data dummy
import { Kereta } from "./DummyData/DummyData";

// import image
import arrow from "../assets/img/Arrow.png";

function DaftarTicket() {
  const [state, dispatch] = useContext(UserContext);

  const [showStatus, setShowStatus] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showDaftar, setShowDaftar] = useState(false);

  return (
    <>
      <Container className="mt-5">
        <Row className="p-5">
          <Col>
            <h5 style={{ fontSize: "17px" }}>Nama Kereta</h5>
          </Col>
          <Col>
            <h5 style={{ fontSize: "17px" }}>Berangkat</h5>
          </Col>
          <Col></Col>
          <Col>
            <h5 style={{ fontSize: "17px" }}>Tiba</h5>
          </Col>
          <Col>
            <h5 style={{ fontSize: "17px" }}>Durasi</h5>
          </Col>
          <Col>
            <h5 style={{ fontSize: "17px" }}>Harga Per Orang</h5>
          </Col>
        </Row>

        {state.isLogin ? (
          <>
            {/* to call data */}
            {Kereta.map((data) => (
              <Button
                onClick={() => setShowStatus(true)}
                className="w-100 bg-body border-0 text-black mb-4 p-0"
              >
                <Row className="border p-5 shadow rounded mb-3" key={data.id}>
                  <Col>
                    <h6>{data.name}</h6>
                    <p>{data.kelas}</p>
                  </Col>
                  <Col>
                    <h6>{data.depart}</h6>
                    <p>{data.from}</p>
                  </Col>
                  <Col>
                    <img src={arrow} />
                  </Col>
                  <Col>
                    <h6>{data.Arrv}</h6>
                    <p>{data.to}</p>
                  </Col>
                  <Col>
                    <h6>{data.durasi}</h6>
                  </Col>
                  <Col>
                    <h6 className="text-danger">{data.harga}</h6>
                  </Col>
                </Row>
              </Button>
            ))}
          </>
        ) : (
          <>
            {/* to call data */}
            {Kereta.map((data) => (
              <Button
                onClick={() => setShowLogin(true)}
                className="w-100 bg-body border-0 text-black mb-4 p-0"
              >
                <Row className="border p-5 shadow rounded mb-3" key={data.id}>
                  <Col>
                    <h6>{data.name}</h6>
                    <p>{data.kelas}</p>
                  </Col>
                  <Col>
                    <h6>{data.depart}</h6>
                    <p>{data.from}</p>
                  </Col>
                  <Col>
                    <img src={arrow} />
                  </Col>
                  <Col>
                    <h6>{data.arrv}</h6>
                    <p>{data.to}</p>
                  </Col>
                  <Col>
                    <h6>{data.durasi}</h6>
                  </Col>
                  <Col>
                    <h6 className="text-danger">{data.harga}</h6>
                  </Col>
                </Row>
              </Button>
            ))}
          </>
        )}
      </Container>
      <Daftar show={showDaftar} showDaftar={setShowDaftar} />
      <Login
        show={showLogin}
        showLogin={setShowLogin}
        showDaftar={setShowDaftar}
      />
      <StatusTicket show={showStatus} showStatus={setShowStatus} />
    </>
  );
}

export default DaftarTicket;
