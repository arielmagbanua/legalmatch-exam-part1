import classNames from "classnames";
import Reviews from "./Reviews";
import reviewsData from "../data/reviews.json"
import AutoCompleteInput from "./AutoCompleteInput";
import IssuesCategoryDropdown from "./IssuesCategoryDropdown";
import OtherCategories from "./OtherCategories";

function MainContent({className}) {
  const mainClasses = classNames(
    'container mx-auto px-8 py-10',
    '2xl:container 2xl:mx-auto 2xl:px-8 2xl:py-10',
    'xl:container xl:mx-auto xl:px-8 xl:py-10',
    'lg:mx-auto lg:px-4 lg:py-10',
    'md:mx-auto md:px-0 md:py-10',
    'sm:mx-auto sm:px-0 sm:py-10',
    className
  );

  const sectionClasses = classNames(
    'grid grid-cols-2 py-4 px-8',
    '2xl:grid 2xl:grid-cols-2 2xl:py-4 2xl:px-8',
    'xl:grid xl:grid-cols-2 xl:py-4 xl:px-8',
    'lg:grid lg:grid-cols-2 lg:py-4 lg:px-1',
    'md:grid md:grid-cols-1 md:py-4 md:px-6',
    'sm:grid sm:grid-cols-1 sm:py-4 sm:px-6',
    'xs:grid xs:grid-cols-1 xs:py-4 xs:px-1',
  );

  return (
    <main className={mainClasses}>
      <article className="p-8">
        <h1 className="text-5xl text-white">Find a Lawyer for your Legal Issue</h1>
        <h2 className="text-3xl font-bold text-white">Fast, Free and Confidential</h2>
      </article>
      <section className={sectionClasses}>
        <div className="flex flex-col justify-center sm:mb-4">
          <AutoCompleteInput
            icon="1"
            className="text-white mb-8 px-20 md:px-10 sm:px-6 xs:px-4"
            label="Enter Zip Code or City:"
            placeholder="Does not have to be where you live"
          />
          <IssuesCategoryDropdown
            icon="1"
            className="text-white pb-2 px-20 md:px-10 sm:px-6 xs:px-4"
            label="Click to choose a legal category"
            placeholder="Click to choose a legal category"
          />
          <OtherCategories/>
        </div>
        <div className="flex flex-col justify-center sm:mt-4 xs:mt-4">
          <p className="text-left text-base p-4 text-white">
            Clients review LegalMatch lawyers
          </p>

          <Reviews reviews={reviewsData}/>
        </div>
      </section>
    </main>
  );
}

export default MainContent;