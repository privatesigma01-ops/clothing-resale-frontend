import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Admin from './components/Admin';
import Auth from './components/Auth';

function App() {
  return (
    <Router>
      <div style={{ padding: "10px", backgroundColor: "#f0f0f0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1 style={{ fontWeight: "bold" }}>Clothing Resale</h1>
        <nav>
          <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
          <Link to="/admin" style={{ marginRight: "10px" }}>Admin</Link>
          <Link to="/login">Login</Link>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Auth />} />
      </Routes>
    </Router>
  );
}

export default App;
