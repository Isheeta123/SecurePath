// App.jsx
import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import Register from './pages/Register';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Manager from './pages/Manager';
import Employee from './pages/Employee';
import Landing from './pages/landingPage'; 
import darkTheme from './theme/theme';

// ProtectedRoute component
const ProtectedRoute = ({ allowedRole, children }) => {
  const userRole = localStorage.getItem('userRole');
  if (userRole !== allowedRole) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<Landing />} />

        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRole="admin">
              <Admin />
            </ProtectedRoute>
          }
        />
        <Route
          path="/manager"
          element={
            <ProtectedRoute allowedRole="manager">
              <Manager />
            </ProtectedRoute>
          }
        />
        <Route
          path="/employee"
          element={
            <ProtectedRoute allowedRole="employee">
              <Employee />
            </ProtectedRoute>
          }
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
