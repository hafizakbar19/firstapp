import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import Promo from "./components/Promo";

function App() {
  return (
    <div>
      <Nav />
      <Promo name="Ahmed" color="orange" />
    </div>
  );
};

export default App;
