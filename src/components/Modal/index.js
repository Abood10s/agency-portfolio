import React from "react";
import "./style.css";

import PrimaryButton from "../primaryButton";
import CompanyFacts from "../company-facts";

const fadeInModal = { animation: "fadeModal 0.2s forwards" };
const fadeOutModal = { animation: "fadeOutModal 0.2s forwards" };

const Modal = ({ showModal, setShowModal }) => {
  return (
    <div
      style={showModal ? fadeInModal : fadeOutModal}
      className="modal-container"
    >
      <CompanyFacts />
      <div className="overlay" onClick={() => setShowModal(false)}></div>
      <PrimaryButton setShowModal={setShowModal} title="Cancel" />
    </div>
  );
};

export default Modal;
