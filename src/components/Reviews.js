import classNames from "classnames";
import Review from "./Review";

function Reviews({className, reviews}) {
  const classes = classNames(
    'flex flex-col p-2',
    className
  );

  const renderReviews = reviews.map((review) => {
    return <Review className="text-white" data={review} key={review.id}/>
  })

  return (
    <div className={classes}>
      {renderReviews}
    </div>
  )
}

export default Reviews
