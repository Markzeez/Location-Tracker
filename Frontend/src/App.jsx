import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import TrackPage from './Pages/TrackPage';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Sidebar from './Component/Sidebar';


function App() {
  return (
    <main className="">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="track" element={<TrackPage />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
