import React from 'react';
import logo from './logo.svg';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Favorites from './components/Favorites';
import './App.css';

function App() {
return (

<Router>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <span className="navbar-brand mb-0 h1">
                <img src={logo} alt="React Logo" width="42" /> Deezweb
            </span>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link to="/deezweb" className="nav-link">
                        <i className="fas fa-search"></i> Rechercher un titre</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/deezweb/favorites" className="nav-link">
                        <i className="fas fa-heartbeat"></i> Mes favoris</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <Route path="/deezweb" component={Home} exact />
    <Route path="/deezweb/favorites" component={Favorites} />

    </Router>

    );
    }

    export default App;