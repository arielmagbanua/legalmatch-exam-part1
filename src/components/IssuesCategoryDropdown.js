import classNames from "classnames";
import {useRef, useState} from "react";
import {FaChevronDown} from "react-icons/fa";
import useDismissTarget from "../hooks/dissmiss-target";
import issueCategories from "../data/issueCategories.json";
import Modal from "./Modal";
import CheckBox from "./CheckBox";

function IssuesCategoryDropdown({className, icon, label, placeholder}) {
  const classes = classNames('grid grid-cols-1 px-20', className);

  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showCategoryModal, setShowCategoryModal] = useState(false);

  const dropDownBox = useRef();
  useDismissTarget(dropDownBox, setShowDropdown);

  // get the category names
  const renderedCategoryItems = issueCategories.map((category) => {
    return (
      <li
        key={category.id}
        className="cursor-pointer hover:font-bold hover:bg-blue-300 px-10 py-1 text-sm"
        onClick={() => handleCategoryClick(category)}
      >
        {category.name}
      </li>
    );
  });

  const renderedDropdown = showDropdown && (
    <div ref={dropDownBox} className="relative z-20">
      <div className="absolute w-full bg-white rounded-2xl shadow-sm px-3 py-6 scroll-smooth overflow-scroll max-h-96">
        <div className="flex flex-col">
          <ol className="text-black">
            {renderedCategoryItems}
          </ol>
        </div>
      </div>
    </div>
  );

  const renderSelectedCategory = selectedCategory ? <p className="grow text-black">{selectedCategory.name}</p> :
    <p className="grow text-gray-400">{placeholder}</p>

  const handleDropdownClick = () => {
    setShowDropdown(true);
  }

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setShowDropdown(false);
    setShowCategoryModal(true);
  }

  // handles the closing of review modal
  const handleClose = () => {
    setShowCategoryModal(false);
  }

  const categoryModalActionBar = (
    <div className="w-full flex items-center justify-center">
      <button
        className="uppercase text-white bg-blue-900 text-sm px-5 py-3 rounded-3xl"
        onClick={handleClose}
      >
        Find a Lawyer Now
      </button>
    </div>
  );

  const renderedIssues = selectedCategory && (
    selectedCategory.issues.map((issue, index) => {
      return (
        <CheckBox className="text-black" label={issue} key={`${selectedCategory.id}_${index}`}/>
      );
    })
  );

  const categoryModal = selectedCategory && (
    <Modal
      className="modal__content--issue-category sm:inset-x-10 lg:inset-x-96 lg:inset-y-72 sm:inset-y-8 md:inset-y-44 inset-x-96 inset-y-72"
      onClose={handleClose} actionBar={categoryModalActionBar}>
      <div className="flex items-center justify-start mb-8">
        <span className="mx-3 mr-4 text-white bg-amber-500 px-2.5 py-1 rounded-3xl text-xs">
          3
        </span>
        <p className="grow">
          {'Which '}<span className="font-bold">{selectedCategory.name}</span>{' issue(s) apply to your case?'}
        </p>
      </div>
      <div className="grid grid-cols-2 gap-1 scroll-smooth overflow-scroll max-h-52 ml-2.5">
        {renderedIssues}
      </div>
    </Modal>
  );

  return (
    <div className={classes}>
      <div className="flex flex-col flex-nowrap w-full mb-1">
        <label className="block text-base font-medium leading-6">{label}</label>
        <div
          className="relative mt-2 rounded-3xl shadow-sm bg-white h-12 cursor-pointer"
          onClick={handleDropdownClick}
        >
          <div className="flex flex-nowrap items-center justify-center h-12">
            <span className="mx-3 mr-4 text-white bg-amber-500 px-2.5 py-1 rounded-3xl text-xs">{icon}</span>
            {renderSelectedCategory}
            <FaChevronDown className="text text-gray-400 mx-3"/>
          </div>
        </div>
      </div>
      {renderedDropdown}

      {showCategoryModal && categoryModal}
    </div>
  );
}

export default IssuesCategoryDropdown;