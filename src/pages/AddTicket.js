import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import Navigation from "../components/navigations/Navigation";
import Footer from "../components/Footer";

const AddTicket = () => {
  return (
    <>
      <div>
        <Navigation />
        <div className="mt-5">
          <Container>
            <h3 className="mb-5">Tambah Tiket</h3>
            <Form className="text-center">
              <Form.Control
                type="text"
                placeholder="Nama Kereta"
                aria-label="Disabled input example"
                className="mb-4 "
                readOnly
              />
              <Form.Select
                aria-label="Default select example"
                className="mb-4 "
              >
                <option hidden>Jenis Kereta</option>
                <option>Argo Wilis</option>
                <option>Wilis Argo</option>
                <option>Argo Kenatu</option>
              </Form.Select>
              <Form.Control
                type="text"
                placeholder="Tanggal Keberangkatan"
                aria-label="Disabled input example"
                className="mb-4"
                readOnly
              />
              <Form.Control
                type="text"
                placeholder="Jam Keberangkatan"
                aria-label="Disabled input example"
                className="mb-4"
                readOnly
              />
              <Form.Control
                type="text"
                placeholder="Stasiun Tujuan"
                aria-label="Disabled input example"
                className="mb-4"
                readOnly
              />
              <Form.Control
                type="text"
                placeholder="Jam Tiba"
                aria-label="Disabled input example"
                className="mb-4"
                readOnly
              />
              <Form.Control
                type="text"
                placeholder="Harga Tiket"
                aria-label="Disabled input example"
                className="mb-4"
                readOnly
              />
              <Form.Control
                type="text"
                placeholder="Qty"
                aria-label="Disabled input example"
                className="mb-4"
                readOnly
              />
              <Button className="text-center w-75 bg-success border-0 fw-bold mb-5">
                Save
              </Button>
            </Form>
          </Container>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AddTicket;
