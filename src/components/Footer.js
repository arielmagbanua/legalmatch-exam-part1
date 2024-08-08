import classNames from "classnames";
import CompanyLogo from "./CompanyLogo";
import Image from "./Image";
import trusteLogo from "../assets/truste-logo.webp";
import bbbLogo from "../assets/bbb-logo.png";
import {FaCircle} from "react-icons/fa";

function Footer({logo, className, children}) {
  const classes = classNames('flex items-start justify-center p-12 px-36', className);

  return (
    <div className={classes}>
      <div className="flex flex-col items-start justify-start">
        <CompanyLogo
          className="flex-col grow items-start justify-start text-base/3"
          logo={logo}
          tagline="Find the right lawyer now"
        />
      </div>
      <div className="flex flex-col grow justify-between items-center min-h-28">
        <div className="flex flex-nowrap items-center justify-center">
          <p className="cursor-pointer text-sm text-gray-500 mr-4">User Agreement</p>
          <FaCircle className="text-sm text-gray-500 mr-4"/>
          <p className="cursor-pointer text-sm text-gray-500 mr-4">Privacy Policy</p>
          <FaCircle className="text-sm text-gray-500 mr-4"/>
          <p className="cursor-pointer text-sm text-gray-500">Site Map</p>
        </div>
        <div className="w-[34rem] text-wrap text-center text-gray-500">
          <p className="text-sm">
            Copyright 1999-2016 LegalMatch. All rights reserved. ®, the LegalMatch logo, and the tradedress are
            trademarks of LegalMatch. Patents Pending.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Image className="w-28 mb-3" src={trusteLogo}/>
        <Image className="w-28" src={bbbLogo}/>
      </div>
    </div>
  );
}

export default Footer