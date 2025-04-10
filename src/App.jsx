import { BrowserRouter as Router, Route, Routes} from "react-router";
import Nav from "./assets/Components/Nav";
import { useState } from "react";
import DragonBall from './assets/Pages/DragonBall'; // Importa tus páginas
import Morty from './assets/Pages/Morty';
import "./App.css";
function App() {
  return (
    <Router>
      <Nav /> 
      <Routes>
        <Route path="/dragon-ball" element={<DragonBall />} />
        <Route path="/morty" element={<Morty />} />
      </Routes>
    </Router>
  );
}

export default App;
