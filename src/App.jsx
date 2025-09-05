import { lazy, useState } from "react";
import "./App.css";
import { FaHome, FaTrashAlt } from "react-icons/fa";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { MdOutlineEmail } from "react-icons/md";

const Notification = lazy(() => import("./components/ui/Notification"));

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Notification />
      <div className="m-4">
        <div className="text-center mb-4">
          <h2>Welcome to GHALASS Web Site</h2>
          <h6 className="fst-italic d-flex justify-content-center align-items-center gap-1">
            <MdOutlineEmail />

            <a href="mailto:webmaster@example.com">msghalas@gmail.com</a>
          </h6>
          <h5 className="text-danger">Under construction !!!</h5>
          <HiOutlineWrenchScrewdriver className="text-danger" size={40} />
        </div>

        <div className="d-flex align-items-center gap-2 my-1">
          <FaHome /> Icon
        </div>

        <div className="d-flex align-items-center gap-2 my-1">
          <button
            className="btn btn-sm btn-outline-danger d-flex align-items-center gap-1"
            onClick={() => toast.success("Supprimé avec succès.")}
          >
            <FaTrashAlt /> Supprimer
          </button>
        </div>

        <div className="d-flex align-items-center gap-2 my-1">
          <>
            <Button
              variant="outline-success sm d-flex align-items-center gap-1"
              size="sm"
              onClick={handleShow}
            >
              <FaHome /> Modal
            </Button>

            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                I will not close if you click outside me. Do not even try to
                press escape key.
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary">Understood</Button>
              </Modal.Footer>
            </Modal>
          </>
        </div>

        <h6>Deploy On VPS Hostinger :) !!</h6>
      </div>
    </>
  );
}

export default App;
