import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './components//pages/Login';
import { Home } from './components/pages/Home';
import { Register } from './components/pages/Register';
import { Dashboard } from './components/pages/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
