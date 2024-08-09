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

  const otherCategoriesModalClasses = classNames(
    'modal__content--issue-category',
    'inset-x-[480px] inset-y-32',
    '2xl:inset-x-[420px] 2xl:inset-y-60',
    'xl:inset-x-[320px] xl:inset-y-60',
    'lg:inset-x-[220px] lg:inset-y-60',
    'md:inset-x-[85px] md:inset-y-60',
    'sm:inset-x-[20px] sm:inset-y-60',
    'xs:inset-x-[20px] xs:inset-y-60'
  );

  const otherCategoriesModal = showOtherCategoryModal && (
    <Modal
      className={otherCategoriesModalClasses}
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