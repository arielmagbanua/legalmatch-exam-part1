import classNames from "classnames";
import {useMemo, useState} from "react";
import Modal from "./Modal";
import otherCategories from "../data/otherCategories.json";

function OtherCategories({className}) {
  const classes = classNames('text-center text-white', className);

  const [showOtherCategoryModal, setShowOtherCategoryModal] = useState(false);

  const handleClickHere = () => {
    setShowOtherCategoryModal(true);
  }

  const handleClose = () => {
    setShowOtherCategoryModal(false);
  }

  const rendetedCategories = otherCategories.map((category, index) => {
    return (
      <p className="text-blue-600 cursor-pointer" key={index}>{category}</p>
    );
  })

  const otherCategoriesModal = showOtherCategoryModal && (
    <Modal
      className="modal__content--issue-category sm:inset-x-10 lg:inset-x-96 lg:inset-y-72 sm:inset-y-8 md:inset-y-44 inset-x-96 inset-y-72"
      onClose={handleClose}
      title="Other Categories"
      subTitle="Choose the category that best fits your case"
    >
      <div className="grid grid-cols-2 gap-1 scroll-smooth overflow-scroll max-h-72 py-4">
        {rendetedCategories}
      </div>
    </Modal>
  );

  return (
    <>
      <p className={classes}>
        Can't find your category? <span className="underline cursor-pointer" onClick={handleClickHere}>Click here.</span>
      </p>

      {showOtherCategoryModal && otherCategoriesModal}
    </>
  );
}

export default OtherCategories;