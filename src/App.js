import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyAccordion from "./components/Accordion";
import MyDropdown from "./components/Dropdown";
import MyNavbar from "./components/MyNavbar";

function App() {
  return (
    <>
      <MyNavbar />
      <MyDropdown />
      <MyAccordion />
    </>
  );
}

export default App;
