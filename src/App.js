import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ShowDetails from "./components/ShowDetails";
import ShowList from "./components/ShowList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<ShowList />} />
        <Route path="/show/:id" element={<ShowDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
