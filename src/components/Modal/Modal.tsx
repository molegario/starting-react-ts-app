import { FC, PropsWithChildren, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import classes from "./Modal.module.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal:FC<PropsWithChildren<ModalProps>> = ({ //NOTE use PropsWithChildren GENERIC if children NEEDED
  children,
  isOpen,
  onClose,
}) => {
  const innerRef = useRef<HTMLDialogElement>(null);

  useEffect(
    () => {
      const dialog = innerRef.current;
      if(isOpen) {
        dialog!.showModal(); // ! is used to assert that dialog is not null
      }
      return () => {
        dialog!.close(); // ! is used to assert that dialog is not null
        onClose();
      }
    },
    [isOpen, onClose]
  );

  return createPortal(
    <dialog className={classes.modal} ref={innerRef} onClose={onClose}>
      {
        isOpen && (
          <div id="modal-content">
            {children}
          </div>
        )
      }
    </dialog>,
    document.getElementById("modal-root") as HTMLElement
  );
}

export default Modal;