import classNames from "classnames";
import {useState} from "react";
import truncateText from "../utils/truncate-text";
import {HiOutlineBookOpen} from "react-icons/hi";
import Modal from "./Modal";
import dateFormatter from "../utils/date-formatter";
import StarRating from "./StarRating";
import ProfileImage from "./ProfileImage";

function Review({data, className}) {
  const [showModal, setShowModal] = useState(false);

  // destruct the data
  const {lawyer, overall, reviews} = data;

  // the classes for main div
  const classes = classNames('grid grid-cols-4', className);

  // format the date of the reviews
  const formattedReviews = reviews.map((review) => {
    return {...review, date: new Date(review.date)};
  });

  // sort descending
  const sortedReviews = formattedReviews.sort((a, b) => b.date - a.date);

  // pluck the first latest review
  const latestReview = sortedReviews.shift();

  // render the sorted reviews for modal
  const renderedSortedReviews = sortedReviews.map((review, index) => {
    return (
      <div className="flex justify-between flex-nowrap items-center" key={index}>
        <p className="text-sm py-0.5">{review.comment}</p>
        <StarRating rating={review.stars} className="ml-4"/>
      </div>
    );
  })

  // get and render the average stars
  const allStarCount = sortedReviews.reduce((accumulator, review) => {
    return accumulator + review.stars;
  }, 0);
  const averageStars = Math.round(allStarCount / sortedReviews.length);

  const handleReviewClick = () => {
    setShowModal(true);
  }

  // handles the closing of review modal
  const handleClose = () => {
    setShowModal(false);
  }

  const modalActionBar = (
    <div className="w-full flex justify-end">
      <button className="uppercase text-blue-600 text-sm" onClick={handleClose}>Close</button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={modalActionBar} title="Client Reviews">
      <div className="flex justify-start items-center pb-6">
        <ProfileImage imageSrc={lawyer.photo} alt={lawyer.name}/>
        <div className="ml-6 grow grid grid-cols-1">
          <p className="text-left text-2xl">{lawyer.name}</p>
          <p className="text-left text-sm text-gray-400">{`${lawyer.city}, ${lawyer.state}`}</p>
          <p className="text-left text-sm">{lawyer.type}</p>
        </div>
      </div>
      <div className="flex justify-start items-center flex-nowrap border-b border-black pb-2">
        <p className="text-lg">{`Rating (${reviews.length} users)`}</p>
        <StarRating rating={averageStars} className="ml-4"/>
      </div>
      <div
        className="flex flex-col flex-nowrap justify-start py-6 pr-4 scroll-smooth border-b border-black overflow-y-scroll h-60">
        <div className="flex justify-between items-center flex-nowrap">
          <p className="font-bold text-sm py-0.5">Overall</p>
          <StarRating rating={overall} className="ml-4"/>
        </div>
        {renderedSortedReviews}
      </div>
      <div className="flex flex-col flex-nowrap justify-start">
        <div className="flex flex-nowrap justify-start items-center py-6">
          <StarRating rating={latestReview.stars}/>
          <p className="font-bold ml-2 text-sm">{`by ${latestReview.name}, ${dateFormatter(latestReview.date)}`}</p>
        </div>
        <p className="text-sm">{latestReview.comment}</p>
      </div>
    </Modal>
  );

  return (
    <div className={classes}>
      <div className="col-span-1">
        <div className="flex flex-col items-center p-2">
          <ProfileImage imageSrc={lawyer.photo} alt={lawyer.name}/>
          <p className="text-center text-xs">{lawyer.name}</p>
          <p className="text-center text-xs">{`${lawyer.city}, ${lawyer.state}`}</p>
        </div>
      </div>
      <div className="col-span-3 py-4">
        <div className="flex flex-col">
          <div className="flex mb-2">
            <p className="text-xs mr-4">{lawyer.type}</p>
            <StarRating rating={overall}/>
          </div>
          <p className="italic text-xs text-ellipsis mb-2">
            {truncateText(latestReview.comment, 120)}
          </p>
          <div className="flex items-center justify-end cursor-pointer" onClick={handleReviewClick}>
            <p className="text-xs text-yellow-500 px-1">Read Review</p>
            <HiOutlineBookOpen className="text-xs text-yellow-500"/>
          </div>
        </div>
      </div>

      {showModal && modal}
    </div>
  );
}

export default Review;
