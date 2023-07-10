import React from "react";
import { Button, Form } from "react-bootstrap";

const EditStatus = () => {
  return (
    <>
      <div>
        <Form className="m-3 text-center">
          <Form.Control
            type="text"
            placeholder="1"
            aria-label="Disabled input example"
            className="mb-4"
            disabled
            readOnly
          />
          <Form.Control
            type="text"
            placeholder="Anto"
            aria-label="Disabled input example"
            className="mb-4"
            disabled
            readOnly
          />
          <Form.Control
            type="text"
            placeholder="Surabaya - Jakarta"
            aria-label="Disabled input example"
            className="mb-4"
            disabled
            readOnly
          />
          <Form.Control
            type="text"
            placeholder="Bca.jpg"
            aria-label="Disabled input example"
            className="mb-4"
            disabled
            readOnly
          />
          <Form.Control
            type="text"
            placeholder="Approved"
            aria-label="Disabled input example"
            className="mb-4"
            readOnly
          />
          <Button className="text-center w-75 bg-success border-0 fw-bold">
            Save
          </Button>
        </Form>
      </div>
    </>
  );
};

export default EditStatus;
