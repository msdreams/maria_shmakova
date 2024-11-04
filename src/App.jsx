import "./App.scss";
import { Header } from "./Components/Header/Header.jsx";
import { Footer } from "./Components/Footer/Footer.jsx";
import { Outlet } from "react-router-dom";

export const App = () => {

  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
