import Header from "./components/Header";
import logo from "./assets/logo.svg";
import CheckList from "./components/CheckList";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import {FaCircle} from "react-icons/fa";
import {TbRegistered} from "react-icons/tb";

function App() {
  const guarantees = [
    'No fee to present your case',
    'Choose from lawyers in your area',
    'A 100% confidential service'
  ];

  return (
    <div className="app">
      <div className="app__container">
        <Header logo={logo} className="app__nav-bar bg-white">
          <div className="flex grow items-center justify-end">
            <CheckList items={guarantees}/>
          </div>
        </Header>
        <MainContent className="app__container__main-content"/>
        <Footer logo={logo} className="bg-white"/>
      </div>
    </div>
  );
}

export default App;
