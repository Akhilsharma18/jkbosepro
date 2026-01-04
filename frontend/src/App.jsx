import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Notifications from './pages/Notifications';
import Results from './pages/Results';
import Downloads from './pages/Downloads';
import Contact from './pages/Contact';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';

// Protected Route Wrapper
const RequestAuth = ({ children }) => {
  const token = localStorage.getItem('adminToken');
  return token ? children : <Navigate to="/admin/login" />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="academics" element={<Academics />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="results" element={<Results />} />
          <Route path="downloads" element={<Downloads />} />
          <Route path="contact" element={<Contact />} />
          <Route path="admin/login" element={<AdminLogin />} />
          <Route path="admin/dashboard" element={
            <RequestAuth>
              <AdminDashboard />
            </RequestAuth>
          } />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
