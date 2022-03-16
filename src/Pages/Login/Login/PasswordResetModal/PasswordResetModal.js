import { Button, Modal } from "react-bootstrap";

const PasswordResetModal = ({ show, handleClose }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>Please Check Your Gmail Inbox</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PasswordResetModal;
