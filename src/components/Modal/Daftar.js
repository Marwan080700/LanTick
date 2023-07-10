import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Form, FormSelect, Modal } from "react-bootstrap";

function Daftar({ show, showDaftar }) {
  // deklarasi close modal
  const handleClose = () => showDaftar(false);
  return (
    <Modal show={show} onHide={handleClose}>
      <Container className="p-4">
        <h3 className="text-center mt-4 mb-4">Daftar</h3>
        <Form>
          <Form.Group>
            <Form.Control
              className="mb-4"
              placeholder="Nama Lengkap"
              Type="text"
            ></Form.Control>
            <Form.Control
              className="mb-4"
              placeholder="Username"
              type="text"
            ></Form.Control>
            <Form.Control
              className="mb-4"
              placeholder="Email"
              Type="email"
            ></Form.Control>
            <Form.Control
              className="mb-4"
              placeholder="Password"
              Type="password"
            ></Form.Control>
            <FormSelect className="mb-4" placeholder="Jenis Kelamin">
              <option>Jenis Kelamin</option>
              <option>Laki Laki</option>
              <option>Perempuan</option>
            </FormSelect>
            <Form.Control
              className="mb-4"
              placeholder="Telp"
              Type="Number"
            ></Form.Control>
            <Form.Control
              as="textarea"
              placeholder="Alamat"
              className="mb-4"
              style={{ height: "100px" }}
            />

            <Button className="btn-input-daftar w-100 rounded rounded-4">
              Daftar
            </Button>
          </Form.Group>
        </Form>
      </Container>
    </Modal>
  );
}

export default Daftar;
