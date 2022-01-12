import React from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
               
        <div className="container-fluid">
          
          <Link className="navbar-brand" to="/">Home Page</Link>
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                
                <Link className="nav-link active"  to="Home">Home</Link>
                
              </li>
              <li className="nav-item">
                
                <Link className="nav-link" to="Aboute">Aboute</Link>
                
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="Cantact">Cantact</Link>
              </li>
            </ul>
          </div>
        
        </div>
       
      </nav>
    )
}
