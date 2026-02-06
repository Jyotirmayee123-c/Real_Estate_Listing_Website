import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom';

// Layouts
import MainLayout from './layouts/MainLayout';
import AdminLayout from './layouts/AdminLayout';

// Pages
import Home from './components/Home/Home';
import About from './pages/public/About';
import Login from './pages/public/Login';
import Register from './pages/public/Register';
import Profile from './pages/user/Profile';
import AdminDashboard from './pages/admin/AdminDashboard';
import Buy from './pages/public/Buy';
import Rent from './pages/public/Rent';
import Sell from './pages/public/sell';

// Route Guards
import ProtectedRoute from './route/ProtectedRoute';
import PublicRoute from './route/PublicRoute';

import Contact from './pages/public/Contact';
import AdminProperties from './pages/admin/AdminProperties';
import SaveProperties from './pages/user/SaveProperties';
import ContactAgent from './pages/user/ContactAgent';



function App() {
  return (
    <Routes>
      {/* Public Routes with Main Layout */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="buy" element={<Buy />} />
        <Route path="contact" element={<Contact />} />
        <Route path="rent" element={<Rent />} />
        <Route path="sell" element={<Sell />} />

        {/* Only accessible if NOT logged in */}
        <Route
          path="login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />

        {/* Only accessible if logged in */}
        <Route
          path="profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="saveproperties"
          element={
            <ProtectedRoute>
              <SaveProperties />
            </ProtectedRoute>
          }
        />

<Route
          path="contactagent"
          element={
            <ProtectedRoute>
              <ContactAgent />
            </ProtectedRoute>
          }
        />


      </Route>




      {/* Admin Routes with Admin Layout */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path='properties' element={<AdminProperties />} />
      </Route>

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;