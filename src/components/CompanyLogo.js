import classNames from "classnames";
import Image from "./Image";

function CompanyLogo({logo, tagline, className}) {
  const logoWrapperClasses = classNames(
    'flex items-center grow-0 text-xl',
    className,
    'xs:flex xs:flex-col xs:items-center xs:grow-0 xs:text-lg'
  );

  return (
    <div className={logoWrapperClasses}>
      <Image src={logo} alt="logo" className="w-72 px-4 pb-2 xs:px-2 xs:pb-1"/>
      <p className="uppercase text-center text-blue-900">
        {tagline}
      </p>
    </div>
  );
}

export default CompanyLogo;