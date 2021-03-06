import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import NoteState from "./context/notes/noteState";

function App() {
  return (
    <>
    <NoteState>
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Home/>}>
          </Route>
          <Route exact path="/about" element={<About/>}>
          </Route>
        </Routes>
      </div>
    </Router>
    </NoteState>
    </>
  );
}

export default App;
