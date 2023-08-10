// import "bootstrap/dist/css/bootstrap.min.css";
import "./reset.css";
import "./App.css";

import Home from "./pages/home";

import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
