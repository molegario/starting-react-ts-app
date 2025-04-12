import { FC, PropsWithChildren, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

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
        dialog?.showModal();
      }
      return () => {
        dialog?.close();
        onClose();
      }
    },
    [isOpen, onClose]
  );

  return createPortal(
    <dialog className="modal" ref={innerRef} onClose={onClose}>
      {
        isOpen && (
          <div className="modal-content">
            {children}
          </div>
        )
      }
    </dialog>,
    document.getElementById("modal-root") as HTMLElement
  );
}

export default Modal;