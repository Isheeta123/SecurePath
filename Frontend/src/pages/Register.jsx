import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Link,
  Alert,
  Checkbox,
  FormControlLabel,
  LinearProgress,
  Card
} from '@mui/material';
import axiosInstance from '../api/axiosInstance';  // ✅ USE axiosInstance

const roles = [
  { value: 'admin', title: 'Manager', description: 'Full system access and team oversight' },
  { value: 'manager', title: 'Team Lead', description: 'Department management and reporting' },
  { value: 'employee', title: 'Team Member', description: 'Standard access to system features' }
];

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const getPasswordStrength = () => {
    if (password.length > 10) return 100;
    if (password.length > 6) return 60;
    if (password.length > 0) return 30;
    return 0;
  };

  const handleRegister = async () => {
    if (!firstName || !lastName || !email || !password || !role || !agreed) {
      setError('All fields are required, including agreement to Terms.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      await axiosInstance.post('/users', {
        username: email,
        password,
        role: [role],  // assuming array expected in backend
        companyName: `${firstName} ${lastName}`,
      });
      navigate('/login');  // After successful registration
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ bgcolor: '#0f111a', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Box sx={{
        bgcolor: '#1a1c27',
        borderRadius: 3,
        p: 4,
        width: '100%',
        maxWidth: 450,
        boxShadow: '0 0 15px rgba(0, 247, 255, 0.1)'
      }}>
        <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold', mb: 1 }}>
          Create Your Secure Account
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
          <TextField fullWidth placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} sx={{ input: { color: 'white' }, bgcolor: '#0f111a', borderRadius: 1 }} />
          <TextField fullWidth placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} sx={{ input: { color: 'white' }, bgcolor: '#0f111a', borderRadius: 1 }} />
        </Box>

        <TextField fullWidth placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} sx={{ mb: 2, input: { color: 'white' }, bgcolor: '#0f111a', borderRadius: 1 }} />

        <TextField fullWidth placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} sx={{ mb: 1, input: { color: 'white' }, bgcolor: '#0f111a', borderRadius: 1 }} />

        <LinearProgress variant="determinate" value={getPasswordStrength()} sx={{ height: 5, borderRadius: 1, mb: 1, bgcolor: '#333', '& .MuiLinearProgress-bar': { bgcolor: getPasswordStrength() > 60 ? 'limegreen' : 'orange' } }} />

        <TextField fullWidth placeholder="Confirm Password" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} sx={{ mb: 2, input: { color: 'white' }, bgcolor: '#0f111a', borderRadius: 1 }} />

        <Typography sx={{ color: '#7f8c8d', mb: 1 }}>
          Select Your Role
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          {roles.map((r) => (
            <Card key={r.value} onClick={() => setRole(r.value)} sx={{
              bgcolor: role === r.value ? '#1c1e29' : '#0f111a',
              border: role === r.value ? '1px solid #00f7ff' : '1px solid #2c3e50',
              color: 'white', p: 1, width: '30%', cursor: 'pointer',
              '&:hover': { border: '1px solid #00f7ff' },
              textAlign: 'center', fontSize: '12px',
            }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 0.5 }}>{r.title}</Typography>
              <Typography variant="caption" sx={{ fontSize: '10px', color: '#7f8c8d' }}>{r.description}</Typography>
            </Card>
          ))}
        </Box>

        <FormControlLabel control={<Checkbox checked={agreed} onChange={(e) => setAgreed(e.target.checked)} sx={{ color: '#00f7ff' }} />} label={<Typography variant="caption" sx={{ color: '#7f8c8d' }}>
          I agree to the <span style={{ color: '#00f7ff', cursor: 'pointer' }}>Terms of Service</span> and <span style={{ color: '#00f7ff', cursor: 'pointer' }}>Privacy Policy</span>
        </Typography>} sx={{ mb: 2 }} />

        <Button fullWidth variant="contained" sx={{
          bgcolor: 'transparent',
          backgroundImage: 'linear-gradient(to right, #00f7ff, #9b5cff)',
          color: 'white', fontWeight: 'bold', borderRadius: '8px', textTransform: 'none',
          '&:hover': { backgroundImage: 'linear-gradient(to right, #00e0ff, #8a4fff)' }
        }} onClick={handleRegister}>
          Create Secure Account
        </Button>

        <Typography variant="caption" display="block" align="center" sx={{ color: '#7f8c8d', mt: 2 }}>
          Already have an account?{' '}
          <Link href="/login" sx={{ color: '#00f7ff', cursor: 'pointer' }}>
            Sign in
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default Register;
