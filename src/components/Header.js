import CompanyLogo from "./CompanyLogo";
import classNames from "classnames";
import CheckList from "./CheckList";

function Header({logo, className}) {
  const navBarContentWrapperClasses = classNames(
    '2xl:container 2xl:px-4',
    'xl:container xl:px-4',
    'lg:container lg:px-4',
    'md',
    'sm',
  );

  const navBarContentClasses = classNames(
    'flex flex-wrap items-center justify-center',
    '2xl:flex 2xl:flex-wrap',
    'xl:flex xl:flex-wrap',
    'lg:flex lg:flex-wrap',
    'md:flex md:flex-wrap',
    'sm:flex sm:flex-no-wrap',
    'xs:flex xs:flex-no-wrap',
    'xxs:flex xxs:flex-no-wrap',
    '2xxs:flex 2xxs:flex-no-wrap'
  );

  const childrenClasses = classNames(
    'flex grow justify-start',
    '2xl:flex 2xl:grow 2xl:justify-start 2xl:pb-4 2xl:pt-0',
    'xl:flex xl:grow xl:justify-start xl:pb-4 xl:pt-0',
    'lg:flex lg:grow lg:justify-start lg:pb-4 lg:pt-0',
    'md:flex md:grow-0 md:justify-center md:pb-4',
    'sm:flex sm:grow-0 sm:justify-center sm:pb-4',
    'xs:flex xs:grow-0 xs:justify-center xs:pb-4',
    'xxs:flex xxs:grow-0 xxs:justify-center xxs:pb-4',
    '2xxs:flex 2xxs:grow-0 2xxs:justify-center 2xxs:pb-4'
  );

  const guarantees = [
    'No fee to present your case',
    'Choose from lawyers in your area',
    'A 100% confidential service'
  ];

  return (
    <header className={className}>
      <nav className="header__nav">
        <div className={navBarContentWrapperClasses}>
          <div className={navBarContentClasses}>
            <CompanyLogo className="p-8 md:p-6 sm:px-4 xs:px-2" logo={logo} tagline="Find the right lawyer now"/>
            <div className={childrenClasses}>
              <div className="flex grow items-center justify-end">
                <CheckList items={guarantees}/>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
