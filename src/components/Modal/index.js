import React from "react";
import "./style.css";

import PrimaryButton from "../primaryButton";
import CompanyFacts from "../company-facts";

const fadeInModal = { animation: "fadeModal 0.2s forwards" };
const fadeOutModal = { animation: "fadeOutModal 0.2s forwards" };

const Modal = ({ showModal, setShowModal }) => {
  return (
    <div
      className="modal-container"
      style={showModal ? fadeInModal : fadeOutModal}
    >
      <CompanyFacts />
      <PrimaryButton setShowModal={setShowModal} title="Cancel" />
      <div className="overlay" onClick={() => setShowModal(false)}></div>
    </div>
  );
};

export default Modal;
