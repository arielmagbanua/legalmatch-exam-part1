import CompanyLogo from "./CompanyLogo";
import classNames from "classnames";

function NavBar({children, logo, className}) {
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
  );

  const childrenClasses = classNames(
    'flex grow justify-start',
    '2xl:flex 2xl:grow 2xl:justify-start 2xl:pb-4 2xl:pt-0',
    'xl:flex xl:grow xl:justify-start xl:pb-4 xl:pt-0',
    'lg:flex lg:grow lg:justify-start lg:pb-4 lg:pt-0',
    'md:flex md:grow-0 md:justify-center md:pb-4',
    'sm:flex sm:grow-0 sm:justify-center sm:pb-4'
  );


  return (
    <>
      <nav className={className}>
        <div className={navBarContentWrapperClasses}>
          <div className={navBarContentClasses}>
            <CompanyLogo className="p-8" logo={logo} tagline="Find the right lawyer now"/>
            <div className={childrenClasses}>
              {children}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
