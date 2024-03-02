import Login from './pages/Login';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
