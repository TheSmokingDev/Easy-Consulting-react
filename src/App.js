import Home from "../src/component/Home/Home/Home";
import { Routes, Route } from "react-router-dom";
import React, { createContext } from "react";
import About from "./component/Home/About/About";
import NotFound from "./component/NotFound";
export const UserContext = createContext();

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
