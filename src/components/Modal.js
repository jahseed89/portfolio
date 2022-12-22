import React from "react";
// import { CgClose } from "react-icons/cg";
import "./modal.scss";

const Modal = ({ children }) => {
  // const [modalIsCloseed, setModalIsClosed] = useState(true);

  // const setModlOff = () => {
  //   setModalIsClosed(false);
  // };
  return (
    <div className="modal">
      {/* <button className="close-modal" onClick={setModlOff}>
      <CgClose />
    </button> */}
      <div className="modal-body">{children}</div>
    </div>
  );
};
export default Modal;
