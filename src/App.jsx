import "./App.scss";
import { Header } from "./Components/Header/Header.jsx";
import { Footer } from "./Components/Footer/Footer.jsx";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { LoadingScreen } from "./Components/LoadingScreen";
import classNames from "classnames";


export const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className={classNames("relative flex flex-col overflow-hidden bg-background",
      {
        "h-screen": loading, 
        "h-full": !loading,
      }
    )}>

      <LoadingScreen
        loading={loading}
        direction="-translate-y-full"
        position="left-0"
        color="bg-secondary-600"
      />

      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
