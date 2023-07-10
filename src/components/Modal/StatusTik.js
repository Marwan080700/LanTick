import React from "react";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function StatusTik({ show, showStatus }) {
  //close status
  const handleClose = () => showStatus(false);

  return (
    <>
      <Modal show={show}>
        <div className="text-center p-4 fs-6">
          <p>
            Tiket anda berhasil ditambahkan silahkan segera melakukan pembayaran
            klik{" "}
            <Link
              to={"/logged/TikPrev"}
              onHide={handleClose}
              className="text-black fw-bold"
              style={{ textDecoration: "none" }}
            >
              {" "}
              Disini
            </Link>
          </p>
        </div>
      </Modal>
    </>
  );
}

export default StatusTik;
