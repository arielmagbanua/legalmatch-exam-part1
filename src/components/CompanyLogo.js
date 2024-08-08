import classNames from "classnames";
import Image from "./Image";

function CompanyLogo({logo, tagline, className}) {
  const classes = classNames('flex items-center grow-0 text-xl', className);

  return (
    <div className={classes}>
      <Image src={logo} alt="logo" className="w-72 px-4"/>
      <p className="uppercase text-center text-blue-900">
        {tagline}
      </p>
    </div>
  );
}

export default CompanyLogo;