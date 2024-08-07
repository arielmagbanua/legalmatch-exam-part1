import NavBar from "./components/NavBar";
import logo from "./assets/logo.svg";
import CheckList from "./components/CheckList";
import MainContent from "./components/MainContent";

function App() {
  const guarantees = [
    'No fee to present your case',
    'Choose from lawyers in your area',
    'A 100% confidential service'
  ];

  return (
    <div className="app">
      <div className="app__container">
        <NavBar logo={logo} className="app__nav-bar bg-white">
        <div className="flex grow-0 items-center">
          <p className="uppercase text-xl text-center text-blue-900">
            Find the right lawyer now
          </p>
        </div>
        <div className="flex grow items-center justify-end">
          <CheckList items={guarantees}/>
        </div>
      </NavBar>
      <MainContent className="app__container__main-content"/>
      </div>
    </div>
  );
}

export default App;
