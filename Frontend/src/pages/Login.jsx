import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Alert,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import axiosInstance from '../api/axiosInstance';  // ✅ Use axiosInstance instead of axios

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!username || !password) {
      setError('Email and password are required');
      return;
    }

    try {
      const response = await axiosInstance.post('/auth/login', {   // ✅ Use axiosInstance here
        username,
        password,
      });

      const { token, user } = response.data;
      if (token) {
        localStorage.setItem('token', token);
        localStorage.setItem('userRole', user.role);

        switch (user.role) {
          case 'admin':
            navigate('/admin');
            break;
          case 'manager':
            navigate('/manager');
            break;
          case 'employee':
            navigate('/employee');
            break;
          default:
            setError('Unknown user role');
        }
      } else {
        setError('Token not received from server');
      }

    } catch (err) {
      setError('Invalid username or password');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ bgcolor: '#0f111a', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Box sx={{
        bgcolor: '#0f111a',
        border: '2px solid #00f7ff',
        borderRadius: '16px',
        p: 4,
        width: '100%',
        maxWidth: 420,
        boxShadow: '0 0 20px rgba(0, 247, 255, 0.3)',
      }}>
        <Typography variant="h5" align="center" sx={{ color: 'white', fontWeight: 'bold', mb: 0.5 }}>
          SECURE <span style={{ color: '#00f7ff' }}>PATH</span>
        </Typography>
        <Typography variant="body2" align="center" sx={{ color: '#6c7a89', mb: 3 }}>
          Advanced Cyber Security Platform
        </Typography>

        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

        <TextField
          id="email"
          name="email"
          fullWidth
          placeholder="Email Address"
          variant="outlined"
          margin="dense"
          sx={{ mb: 2, input: { color: 'white' }, bgcolor: '#1a1c27', borderRadius: 1 }}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <TextField
          id="password"
          name="password"
          fullWidth
          placeholder="Password"
          type={showPassword ? 'text' : 'password'}
          variant="outlined"
          margin="dense"
          sx={{ mb: 2, input: { color: 'white' }, bgcolor: '#1a1c27', borderRadius: 1 }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                  sx={{ color: 'white' }}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Button
          fullWidth
          variant="contained"
          sx={{
            mt: 1,
            bgcolor: 'transparent',
            backgroundImage: 'linear-gradient(to right, #00f7ff, #9b5cff)',
            color: 'white',
            fontWeight: 'bold',
            borderRadius: '8px',
            textTransform: 'none',
            '&:hover': { backgroundImage: 'linear-gradient(to right, #00e0ff, #8a4fff)' },
          }}
          onClick={handleLogin}
        >
          Sign In
        </Button>

        <Typography variant="caption" display="block" align="center" sx={{ color: '#6c7a89', mt: 2 }}>
          Don’t have an account?{' '}
          <Link to="/register" style={{ color: '#00f7ff', cursor: 'pointer', textDecoration: 'none' }}>
            Register
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default Login;
