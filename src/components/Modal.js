import useBodyOverflowHidden from "../hooks/body-overflow-hidden";
import ReactDOM from "react-dom";
import {MdClose} from "react-icons/md";

function Modal({children, title, onClose, actionBar}) {
  useBodyOverflowHidden();

  return ReactDOM.createPortal(
    (
      <div className="modal">
        <div onClick={onClose} className="fixed inset-0 bg-black opacity-70"></div>
        <div className="modal__content sm:inset-x-10 lg:inset-x-80 inset-x-80 sm:inset-y-8 md:inset-y-44 inset-y-80 fixed py-6 px-10 bg-white rounded-xl">
          <div className="flex flex-col justify-between h-full">
            <div className="modal__content__title border-b border-black py-1 pb-2 flex justify-between items-center">
              <p className="uppercase text-xl">{title}</p>
              <MdClose className="text-xl cursor-pointer" onClick={onClose}/>
            </div>
            <div className="flex flex-col justify-start flex-nowrap">
              {children}
            </div>
            <div className="flex items-center justify-center">
              {actionBar}
            </div>
          </div>
        </div>
      </div>
    ),
    document.querySelector('.modal-container')
  );
}

export default Modal;
