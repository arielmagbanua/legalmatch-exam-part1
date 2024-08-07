import classNames from "classnames";
import TextInput from "./TextInput";

function MainContent({className}) {
  const classes = classNames('container mx-auto px-8', className);

  return (
    <main className={classes}>
      <article className="p-8">
        <h1 className="text-5xl text-white">Find a Lawyer for your Legal Issue</h1>
        <h2 className="text-3xl font-bold text-white">Fast, Free and Confidential</h2>
      </article>
      <section className="flex py-4 px-8">
        <div className="flex flex-col grow items-center justify-end">
          <TextInput label="Enter Zip Code or City:" icon="1" className="text-white"/>
          <TextInput label="Choose a category:" icon="2" className="text-white"/>
          <p className="text-center p-4 text-white">Can't find your category? Click here.</p>
        </div>
        <div className="flex grow items-center justify-start">
          <p className="text-left p-4 text-white">
            Clients review LegalMatch lawyers
          </p>
        </div>
      </section>
    </main>
  );
}

export default MainContent;