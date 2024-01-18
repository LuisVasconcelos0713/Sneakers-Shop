import React from "react";
import { AiOutlineClose } from "react-icons/ai";

export default function Modal({
  isOpen,
  handleClose,
  handleCancelShop,
  children,
  tico,
  modalshops,
  handleFinishShop,
}) {
  if (isOpen) {
    return (
      <div className="background-modal">
        <div className="modal">
          <div>
            <a className="button-modaltoclose" onClick={handleClose}>
              <AiOutlineClose />
            </a>
          </div>
          <div>
            <h1>{modalshops}</h1>
            <hr className="space-shops"></hr>
            <div>{children}</div>
            <hr className="space-shops-bottom"></hr>
            <div className="buttons-shops-container">
              <button onClick={handleCancelShop} className="cancel-shops">
                Cancelar Compra
              </button>
              <button onClick={handleFinishShop} className="finish-shops">
                Finalizar Compra
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    null;
  }
}
