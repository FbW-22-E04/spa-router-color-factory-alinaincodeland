import React from "react";

import { Routes, Route } from "react-router-dom";
import AddNewColor from "./components/AddNewColor";
import HomePage from "./components/HomePage";
import SingleColor from "./components/SingleColor";
import "./index.css";
import { useState } from "react";

function Colors() {
  const [selectColor, setSelectColor] = useState(["red", "green", "blue"]);

  return (
    <Routes>
      <Route path="/" element={<HomePage selectColor={selectColor} />} />
      <Route
        path="/colors/new"
        element={
          <AddNewColor
            selectColor={selectColor}
            setSelectColor={setSelectColor}
          />
        }
      />
      <Route path="/colors/:color" element={<SingleColor />} />
    </Routes>
  );
}

export default Colors;
