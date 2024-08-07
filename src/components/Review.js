import emptyAvatar from "../assets/empty-avatar.svg";
import classNames from "classnames";
import {useEffect, useState} from "react";
import {GoStarFill} from "react-icons/go";
import truncateText from "../utils/truncateText";
import {HiOutlineBookOpen} from "react-icons/hi";

function Review({data, className}) {
  const [image, setImage] = useState()

  const {lawyer, overall, reviews} = data;

  useEffect( () => {
    const image = require(`../assets/${lawyer.photo}`);
    setImage(image);
  }, [lawyer.photo])

  // the classes for main div
  const classes = classNames('grid grid-cols-4', className);

  // render the overall stars
  const overAllStars = [...Array(overall).keys()].map((_, index) => {
    return <GoStarFill className="text-amber-500" key={index}/>
  });

  const formattedReviews = reviews.map((review) => {
    return { ...review, date: new Date(review.date) };
  });

  // sort descending
  const sortedReviews = formattedReviews.sort((a, b) => b.date - a.date);

  // pluck the first latest review
  const latestReview = sortedReviews.shift();

  const handleClick = () => {
    console.log('test');
  }

  return (
    <div className={classes}>
      <div className="col-span-1">
        <div className="flex flex-col items-center p-2">
          {image ? <img className="w-16 mb-1" src={image} alt={lawyer.photo}/> :
            <img className="w-16 mb-1" src={emptyAvatar} alt="avatar"/>}
          <p className="text-center text-xs">{lawyer.name}</p>
          <p className="text-center text-xs">{`${lawyer.city}, ${lawyer.state}`}</p>
        </div>
      </div>
      <div className="col-span-3 py-4">
        <div className="flex flex-col">
          <div className="flex mb-2">
            <p className="text-xs mr-4">{lawyer.type}</p>
            <div className="grid grid-cols-5 gap-1">{overAllStars}</div>
          </div>
          <p className="italic text-xs text-ellipsis mb-2">
            {truncateText(latestReview.comment, 120)}
          </p>
          <div className="flex items-center justify-end cursor-pointer" onClick={handleClick}>
            <p className="text-xs text-yellow-500 px-1">Read Review</p>
            <HiOutlineBookOpen className="text-xs text-yellow-500"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
