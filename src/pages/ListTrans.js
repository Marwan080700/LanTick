import React, { useState } from "react";
import { Container, Table, Row, Col, Button, Modal } from "react-bootstrap";

// import icon
import SeachIcon from "../assets/img/searchIcon.png";
import EditIcon from "../assets/img/editIcon.png";
import DeleteIcon from "../assets/img/trashIcon.png";
import EditStatus from "../components/Modal/EditStatus";

// import image
import LogoName from "../assets/img/Land-Tick.png";
import LogoTrain from "../assets/img/train-facing-right 1.png";
import TikDetailAdmin from "../components/Modal/TikDetailAdmin";
import Navigation from "../components/navigations/Navigation";
import Footer from "../components/Footer";

const ListTrans = () => {
  // --------- detail popup
  const [show, setShow] = useState(false);

  // for edit popup
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // --------- edit popup
  // for edit popup
  const [show1, setShow1] = useState(false);

  // for edit popup
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  return (
    <>
      <div>
        <Navigation />
        <div className="mt-4" style={{ height: "80vh" }}>
          <Container>
            <h3>List Transaksi</h3>
            <div className="mt-5">
              <Table striped variant="body">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Users</th>
                    <th>Tiket</th>
                    <th>Bukti Transfer</th>
                    <th>Status Payment</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Anto</td>
                    <td>Surabaya - Jakarta</td>
                    <td>bca.png</td>
                    <td className="text-success">Approve</td>
                    <td>
                      <div>
                        {/* button look detail */}
                        <Button
                          className="btn-link"
                          style={{ textDecoration: "none", color: "black" }}
                          onClick={handleShow}
                        >
                          <img src={SeachIcon} />
                        </Button>

                        <Modal size="lg" show={show} onHide={handleClose}>
                          <Modal.Header closeButton className="border-0">
                            <Modal.Title>
                              <div className="d-flex align-items-center justify-content-end ">
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
                            </Modal.Title>
                          </Modal.Header>
                          <Modal.Body closeButton>
                            <TikDetailAdmin />
                          </Modal.Body>
                        </Modal>

                        {/* button Edit */}
                        <Button
                          className="btn-link"
                          style={{ textDecoration: "none", color: "black" }}
                          onClick={handleShow1}
                        >
                          <img src={EditIcon} />
                        </Button>

                        <Modal show={show1} onHide={handleClose1}>
                          <Modal.Header closeButton className="border-0">
                            <Modal.Title>
                              <div className="d-flex align-items-center justify-content-end ">
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
                            </Modal.Title>
                          </Modal.Header>
                          <Modal.Body closeButton>
                            <EditStatus />
                          </Modal.Body>
                        </Modal>

                        {/* button delete */}
                        <Button
                          className="btn-link"
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          <img src={DeleteIcon} />
                        </Button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Baba</td>
                    <td>Medan - Jakarta</td>
                    <td>bno.png</td>
                    <td className="text-warning">Pending</td>
                    <td>
                      <div>
                        <Button
                          className="btn-link"
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          <img src={SeachIcon} />
                        </Button>
                        <Button
                          className="btn-link"
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          <img src={EditIcon} />
                        </Button>
                        <Button
                          className="btn-link"
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          <img src={DeleteIcon} />
                        </Button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Container>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ListTrans;
