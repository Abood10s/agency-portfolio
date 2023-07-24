import React from "react";
import "./style.css";

import PrimaryButton from "../primaryButton";

const fadeInModal = { animation: "fadeModal 0.2s forwards" };
const fadeOutModal = { animation: "fadeOutModal 0.2s forwards" };

const Modal = ({ showModal, setShowModal, children }) => {
  return (
    <div
      className="modal-container"
      style={showModal ? fadeInModal : fadeOutModal}
    >
      {children}
      <PrimaryButton setShowModal={setShowModal} title="Cancel" />
      <div className="overlay" onClick={() => setShowModal(false)}></div>
    </div>
  );
};

export default Modal;
