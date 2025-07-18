 // App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import './App.css'; // Import your global CSS styles

function App() {
  return (
    <Router>
      <Routes>
        {/* Home page with sign-in */}
        <Route path="/" element={<Home />} />

        {/* Optional login and register pages (can be removed if not used) */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Dashboard page after successful sign-in */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
