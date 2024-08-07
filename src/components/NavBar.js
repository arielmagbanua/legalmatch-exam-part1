import Image from "./Image";

function NavBar({children, logo, className}) {
  return (
    <>
      <nav className={className}>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="flex items-center grow-0">
              <Image src={logo} alt="logo" className="w-72 px-4"/>
            </div>

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
