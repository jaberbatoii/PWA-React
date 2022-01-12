import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route, Link, Routes, BrowserRouter } from "react-router-dom";
import Cantact from './components/pages/Cantact';
import Aboute from './components/pages/Aboute';
import Navbar from './inc/Navbar';
import Footer from './inc/Footer';
function App() {
  return (
    <div>
      <Router>
          <Navbar/>
        <Routes>
          <Route exact path="/" element={<h1>Home Page</h1>} />
          <Route exact path="Home" element={<Home />}/>
          <Route exact path="Cantact" element={<Cantact />} />
          <Route exact path="Aboute" element={<Aboute />} />
        </Routes>
        <Footer/>
        </Router>
    </div>
  );
}

export default App;
