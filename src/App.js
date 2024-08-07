import NavBar from "./components/NavBar";
import logo from "./assets/logo.svg";
import CheckList from "./components/CheckList";

function App() {
  const guarantees = [
    'No fee to present your case',
    'Choose from lawyers in your area',
    'A 100% confidential service'
  ];

  return (
    <div className="app">
      <NavBar logo={logo}>
        <div className="flex grow-0 items-center">
          <p className="uppercase text-xl text-center text-blue-900">
            Find the right lawyer now
          </p>
        </div>
        <div className="flex grow items-center justify-end">
          <CheckList items={guarantees}/>
        </div>
      </NavBar>
    </div>
  );
}

export default App;
