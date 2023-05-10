import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import Promo from "./components/Promo";
import Intro1 from "./components/Intro1";
import eventToggler from "./components/eventToggler";

function App() {
  return (
    <div>
      <Nav />
      <Promo name="Ahmed" color="orange" />
      <Intro1 />
      <eventToggler button="Hi"/>
    </div>
  );
};

export default App;
