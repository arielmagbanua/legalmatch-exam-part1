import classNames from "classnames";
import Image from "./Image";

function CompanyLogo({logo, tagline, className}) {
  const logoWrapperClasses = classNames(
    'flex items-center grow-0 text-xl',
    'xs:flex xs:flex-col xs:items-center xs:grow-0 xs:text-lg',
    'xxs:flex xxs:flex-col xxs:items-center xxs:grow-0 xxs:text-lg',
    '2xxs:flex 2xxs:flex-col 2xxs:items-center 2xxs:grow-0 2xxs:text-lg',
    className
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