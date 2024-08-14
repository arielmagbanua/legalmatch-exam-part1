import useBodyOverflowHidden from "../hooks/body-overflow-hidden";
import ReactDOM from "react-dom";
import { MdClose } from "react-icons/md";
import classNames from "classnames";

function Modal({ children, title, subTitle, onClose, actionBar, className }) {
  useBodyOverflowHidden();

  const modalContainerClasses = classNames(
    'modal__content inset-x-80 inset-y-80 fixed py-6 px-10 bg-white rounded-xl z-30 border-2',
    '2xl:py-6 2xl:px-10',
    'xl:py-6 xl:px-10',
    'lg:py-6 lg:px-10',
    'md:py-6 md:px-10',
    'sm:py-6 sm:px-10',
    'xs:py-4 xs:px-6',
    'xxs:py-2 xxs:px-4',
    '2xxs:py-2 2xxs:px-4',
    className
  );

  let renderedTitleBar = null;
  if (title && !subTitle) {
    renderedTitleBar = (
      <div className="modal__content__title border-b border-black py-1 pb-2 flex justify-between items-center">
        <p className="uppercase text-xl">{title}</p>
        <MdClose className="text-xl cursor-pointer" onClick={onClose} />
      </div>
    );
  } else if (title && subTitle) {
    renderedTitleBar = (
      <div className="modal__content__title border-b border-black py-1 pb-2 flex justify-between items-center">
        <div className="flex flex-col flex-nowrap items-start justify-start">
          <p className="uppercase text-xl">{title}</p>
          <p className="text-xs">{subTitle}</p>
        </div>

        <MdClose className="text-xl cursor-pointer" onClick={onClose} />
      </div>
    );
  } else {
    renderedTitleBar = (
      <div className="modal__content__title py-1 pb-2 flex justify-end items-center">
        <MdClose className="text-xl cursor-pointer" onClick={onClose} />
      </div>
    )
  }

  return ReactDOM.createPortal(
    (
      <div className="modal">
        <div onClick={onClose} className="fixed inset-0 bg-black opacity-70"></div>
        <div className={modalContainerClasses}>
          <div className="flex flex-col justify-start h-full">
            {renderedTitleBar}
            <div className="flex flex-col justify-start flex-nowrap grow">
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
