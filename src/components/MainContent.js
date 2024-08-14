import classNames from "classnames";
import Reviews from "./Reviews";
import reviewsData from "../data/reviews.json"
import AutoCompleteInput from "./AutoCompleteInput";
import IssuesCategoryDropdown from "./IssuesCategoryDropdown";
import OtherCategories from "./OtherCategories";

function MainContent({ className }) {
  const mainClasses = classNames(
    'container mx-auto',
    '2xl:container 2xl:mx-auto 2xl:px-8 2xl:py-10 2xl:pt-[167px]',
    'xl:container xl:mx-auto xl:px-8 xl:py-10 xl:pt-[167px]',
    'lg:mx-auto lg:px-4 lg:py-10 lg:pt-[167px]',
    'md:mx-auto md:px-0 md:py-10 md:pt-[167px]',
    'sm:mx-auto sm:px-0 sm:py-5 sm:pt-[167px]',
    'xs:mx-auto xs:px-0 xs:py-5 xs:pt-[250px]',
    'xxs:mx-auto xxs:px-0 xxs:py-5 xxs:pt-[250px]',
    '2xxs:mx-auto 2xxs:px-0 2xxs:py-5 2xxs:pt-[250px]',
    className
  );

  const headerArticleClasses = classNames(
    'p-8',
    'sm:p-2',
    'xs:p-2',
    'xxs:p-2',
    '2xxs:p-2'
  );

  const searchHeaderTextClasses = classNames(
    'text-5xl text-white',
    'sm:text-4xl',
    'xs:text-3xl',
    'xxs:text-2xl',
    '2xxs:text-2xl'
  );

  const searchSubheaderTextClasses = classNames(
    'font-bold text-white',
    'text-3xl',
    'sm:text-2xl',
    'xs:text-xl',
    'xxs:text-xl',
    '2xxs:text-xl'
  );

  const searchSectionClasses = classNames(
    'grid grid-cols-2',
    '2xl:grid 2xl:grid-cols-2 2xl:py-4 2xl:px-8',
    'xl:grid xl:grid-cols-2 xl:py-4 xl:px-8',
    'lg:grid lg:grid-cols-2 lg:py-4 lg:px-1',
    'md:grid md:grid-cols-1 md:py-4 md:px-6',
    'sm:grid sm:grid-cols-1 sm:py-4 sm:px-6',
    'xs:grid xs:grid-cols-1 xs:py-4 xs:px-1',
    'xxs:grid xxs:grid-cols-1 xxs:py-4 xxs:px-1',
    '2xxs:grid 2xxs:grid-cols-1 2xxs:py-4 2xxs:px-1'
  );

  const zipCitySearchBoxClasses = classNames(
    'text-white mb-8 px-20',
    'md:px-10',
    'sm:px-6',
    'xs:px-4',
    'xxs:px-1',
    '2xxs:px-1'
  );

  const categorySearchBoxClasses = classNames(
    'text-white pb-2 px-20',
    'md:px-10',
    'sm:px-6',
    'xs:px-1',
    'xxs:px-1',
    '2xxs:px-1'
  );

  return (
    <main className={mainClasses}>
      <article className={headerArticleClasses}>
        <h1 className={searchHeaderTextClasses}>
          Find a Lawyer for your Legal Issue
        </h1>
        <h2 className={searchSubheaderTextClasses}>
          Fast, Free and Confidential
        </h2>
      </article>
      <section className={searchSectionClasses}>
        <div className="flex flex-col justify-center sm:mb-4">
          <AutoCompleteInput
            icon="1"
            className={zipCitySearchBoxClasses}
            label="Enter Zip Code or City:"
            placeholder="Does not have to be where you live"
          />
          <IssuesCategoryDropdown
            icon="1"
            className={categorySearchBoxClasses}
            label="Click to choose a legal category"
            placeholder="Click to choose a legal category"
          />
          <OtherCategories />
        </div>
        <div className="flex flex-col justify-center sm:mt-4 xs:mt-4">
          <p className="text-left text-base p-4 sm:pl-0 xs:pl-0 xxs:pl-0 text-white">
            Clients review LegalMatch lawyers
          </p>

          <Reviews reviews={reviewsData} />
        </div>
      </section>
    </main>
  );
}

export default MainContent;