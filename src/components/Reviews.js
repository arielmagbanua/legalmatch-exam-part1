import classNames from "classnames";
import Review from "./Review";

function Reviews({className, reviews}) {
  const classes = classNames('flex flex-col w-full', className);

  const renderReviews = reviews.map((review) => <Review className="text-white" data={review} key={review.id}/>)

  return (
    <div className={classes}>
      {renderReviews}
    </div>
  )
}

export default Reviews
