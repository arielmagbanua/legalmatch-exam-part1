import CompanyLogo from "./CompanyLogo";

function NavBar({children, logo, className}) {
  return (
    <>
      <nav className={className}>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <CompanyLogo className="p-8" logo={logo} tagline="Find the right lawyer now"/>
            <div className="flex grow justify-start">
              {children}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
