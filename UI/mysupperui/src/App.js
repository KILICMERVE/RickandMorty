import React from 'react';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import { Button, Navbar, Nav } from 'react-bootstrap';
import { Home } from './Home';
import { Character } from './Character';
import Episode from './Episode';
import EpisodeDetail from './EpisodeDetail';

function App() {
  return (
    <BrowserRouter>
      <div className="App container bg-pink text-center">
      <div>
         <h1>Rick & Morty</h1>
      </div>

        <nav className="navbar navbar-expand-sm navbar-dark bg-secondary">
          <ul className="navbar-nav">
            <li className="nav-item m-1">
              <NavLink  className="nav-link btn btn-warning" to="/home">
                Anasayfa
              </NavLink>
            </li>
            <li className="nav-item m-1">
              <NavLink className="nav-link btn btn-warning" to="/character">
                Karakterler
              </NavLink>
            </li>
            <li className="nav-item m-1">
              <NavLink className="nav-link btn btn-warning" to="/episode">
                Bölümler
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/character" element={<Character />} />
          <Route path="/episode" element={<Episode />} />
          <Route path="/episode-detail/:id" element={<EpisodeDetail />} /> {/* Yeni eklenen Route */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
