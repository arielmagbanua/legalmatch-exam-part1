import {GoStarFill} from "react-icons/go";
import classNames from "classnames";

function StarRating({rating, className, max = 5, activeColor = 'text-amber-500', inactiveColor = 'text-gray-500'}) {
  const classes = classNames('grid grid-cols-5 gap-1', className)

  const createStars = (count, color) => {
    return [...Array(count).keys()].map((_, index) => {
      return <GoStarFill className={color} key={index}/>
    });
  }

  const renderedStars = (count, max) => {
    let stars = createStars(count, activeColor);

    const emptyStarCount = max - count;
    if (emptyStarCount > 0) {
      // we need to insert gray stars
      const emptyStars = createStars(emptyStarCount, inactiveColor)
      stars = [...stars, ...emptyStars];
    }

    return stars;
  }

  return <div className={classes}>{renderedStars(rating, max)}</div>
}

export default StarRating;
