import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyAccordion from "./components/Accordion";
import MyDropdown from "./components/Dropdown";
import MyNavbar from "./components/MyNavbar";
import MySidebar from "./components/MySidebar";

function App() {
  return (
    <>
      <MySidebar />
      <MyNavbar />
      <MyDropdown />
      <MyAccordion />
    </>
  );
}

export default App;
