import classNames from "classnames";
import TextInput from "./TextInput";
import Reviews from "./Reviews";
import reviewsData from "../data/reviews.json"

function MainContent({className}) {
  const classes = classNames('container mx-auto px-8', className);

  return (
    <main className={classes}>
      <article className="p-8">
        <h1 className="text-5xl text-white">Find a Lawyer for your Legal Issue</h1>
        <h2 className="text-3xl font-bold text-white">Fast, Free and Confidential</h2>
      </article>
      <section className="grid grid-cols-2 py-4 px-8">
        <div className="flex flex-col justify-center">
          <TextInput label="Enter Zip Code or City:" icon="1" className="text-white pb-8" placeholder="Does not have to be where you live"/>
          <TextInput label="Choose a category:" icon="2" className="text-white pb-8" placeholder="Click to choose a legal category"/>
          <p className="text-center text-white">Can't find your category? Click here.</p>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-left p-4 text-white">
            Clients review LegalMatch lawyers
          </p>

          <Reviews reviews={reviewsData}/>
        </div>
      </section>
    </main>
  );
}

export default MainContent;