import classNames from "classnames";
import CompanyLogo from "./CompanyLogo";
import Image from "./Image";
import trusteLogo from "../assets/truste-logo.webp";
import bbbLogo from "../assets/bbb-logo.png";
import {FaCircle} from "react-icons/fa";

function Footer({logo, className}) {
  const mainWrapperClasses = classNames(
    '2xl:flex 2xl:flex-row 2xl:items-start 2xl:justify-center 2xl:p-12 2xl:px-12',
    'xl:flex xl:flex-row xl:items-start xl:justify-center xl:p-12 xl:px-12',
    'lg:flex lg:flex-row lg:items-start lg:justify-center lg:p-8 lg:px-12',
    'md:flex md:flex-row md:items-start md:justify-center md:p-4 md:px-8',
    'sm:flex sm:flex-row sm:items-start sm:justify-center sm:p-2 sm:px-6',
    'xs:flex xs:flex-col xs:items-center xs:justify-center xs:p-2 xs:px-6',
    'xxs:flex xxs:flex-col xxs:items-center xxs:justify-center xxs:p-2 xxs:px-6',
    '2xxs:flex 2xxs:flex-col 2xxs:items-center 2xxs:justify-center 2xxs:p-2 2xxs:px-6',
    className
  );

  const rightsContainerClasses = classNames(
    'flex flex-col grow justify-between items-center min-h-28',
    '2xl:grow',
    'xl:grow',
    'lg:grow-0',
    'md:grow-0',
    'sm:grow-0 sm:pt-2',
    'xs:grow-0 xs:pt-2',
    'xxs:grow-0 xxs:pt-2',
    '2xxs:grow-0 2xxs:pt-2'
  );

  const allRightsStatementClasses = classNames(
    'w-[34rem] text-wrap text-center text-gray-500',
    '2xl:w-[34rem]',
    'xl:w-[34rem]',
    'lg:w-[28rem]',
    'md:w-[22rem]',
    'sm:w-full',
    'xs:w-full',
    'xxs:w-full',
    '2xxs:w-full'
  );

  const logoWrapperClasses = classNames(
    'flex flex-col items-start justify-start my-0',
    '2xl:w-auto 2xl:px-4',
    'xl:w-auto xl:px-4',
    'lg:w-auto lg:px-4',
    'md:w-56 sm:my-4 sm:px-4',
    'xs:my-4 xs:px-4',
    'xxs:my-4 xxs:px-4',
    '2xxs:my-4 2xxs:px-4'
  );

  const trusteBbbClasses = classNames(
    'flex flex-col items-center justify-center',
    '2xl:w-72 2xl:px-4',
    'xl:w-72 xl:px-4',
    'lg:w-72 lg:px-4',
    'md:w-56 md:pt-2 md:px-4',
    'sm:w-full sm:pt-6 sm:pb-4 sm:px-4',
    'xs:w-full xs:pt-6 xs:pb-2 xs:pb-2 xs:px-4',
    'xxs:w-full xxs:pt-6 xxs:pb-2 xxs:pb-2 xxs:px-4',
    '2xxs:w-full 2xxs:pt-6 2xxs:pb-2 2xxs:pb-2 2xxs:px-4'
  );

  return (
    <div className={mainWrapperClasses}>
      <div className={logoWrapperClasses}>
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
        <div className={allRightsStatementClasses}>
          <p className="text-sm">
            Copyright 1999-2016 LegalMatch. All rights reserved. ®, the LegalMatch logo, and the tradedress are
            trademarks of LegalMatch. Patents Pending.
          </p>
        </div>
      </div>
      <div className={trusteBbbClasses}>
        <Image className="w-28 xs:w-48 sm:w-48 xxs:w-56 2xxs:w-56 mb-3" src={trusteLogo}/>
        <Image className="w-28 xs:w-48 sm:w-48 xxs:w-56 2xxs:w-56" src={bbbLogo}/>
      </div>
    </div>
  );
}

export default Footer;