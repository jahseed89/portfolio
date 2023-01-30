import React from "react";
import "./modal.scss";

const Modal = ({ children, bodyClass="modal-body" }) => {
  return (
    <div className="modal">
      <div className={bodyClass}>{children}</div>
    </div>
  );
};
export default Modal;
