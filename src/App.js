import Header from "./components/Header";
import logo from "./assets/logo.svg";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <div className="app__container">
        <Header logo={logo} className="app__nav-bar bg-white"/>
        <MainContent className="app__container__main-content"/>
        <Footer logo={logo} className="bg-white"/>
      </div>
    </div>
  );
}

export default App;
