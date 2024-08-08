import classNames from "classnames";
import CompanyLogo from "./CompanyLogo";
import Image from "./Image";
import trusteLogo from "../assets/truste-logo.webp";
import bbbLogo from "../assets/bbb-logo.png";
import {FaCircle} from "react-icons/fa";

function Footer({logo, className}) {
  const mainWrapperClasses = classNames(
    'flex items-start justify-center p-12 px-36',
    '2xl:flex 2xl:items-start 2xl:justify-center 2xl:p-12 2xl:px-12',
    'xl:flex xl:items-start xl:justify-center xl:p-8 xl:px-12',
    'lg:flex lg:items-start lg:justify-center lg:p-8 lg:px-12',
    'md:flex md:items-start md:justify-center md:p-4 md:px-8',
    'sm:flex sm:items-start sm:justify-center sm:p-2 md:px-6',
    className
  );

  const rightsContainerClasses = classNames(
    'flex flex-col grow justify-between items-center min-h-28',
    '2xl:grow',
    'xl:grow',
    'lg:grow-0',
    'md:grow-0',
    'sm:grow-0'
  );

  const allrightsStatementClasses = classNames(
    'w-[34rem] text-wrap text-center text-gray-500',
    '2xl:w-[34rem]',
    'xl:w-[34rem]',
    'lg:w-[34rem]',
    'md:w-[22rem]',
    'sm:w-[22rem]',
  );

  return (
    <div className={mainWrapperClasses}>
      <div className="flex flex-col items-start justify-star">
        <CompanyLogo
          className="flex-col grow items-start justify-start text-base/3"
          logo={logo}
          tagline="Find the right lawyer now"
        />
      </div>
      <div className={rightsContainerClasses}>
        <div className="flex flex-nowrap items-center justify-center">
          <p className="cursor-pointer text-sm text-gray-500 mr-2">User Agreement</p>
          <FaCircle className="text-sm text-gray-500 mr-2"/>
          <p className="cursor-pointer text-sm text-gray-500 mr-2">Privacy Policy</p>
          <FaCircle className="text-sm text-gray-500 mr-2"/>
          <p className="cursor-pointer text-sm text-gray-500">Site Map</p>
        </div>
        <div className={allrightsStatementClasses}>
          <p className="text-sm">
            Copyright 1999-2016 LegalMatch. All rights reserved. ®, the LegalMatch logo, and the tradedress are
            trademarks of LegalMatch. Patents Pending.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-72">
        <Image className="w-28 mb-3" src={trusteLogo}/>
        <Image className="w-28" src={bbbLogo}/>
      </div>
    </div>
  );
}

export default Footer