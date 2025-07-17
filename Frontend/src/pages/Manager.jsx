import { useEffect, useState } from 'react';
import { Container, Box, Typography } from '@mui/material';
import axiosInstance from '../api/axiosInstance';

const Manager = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axiosInstance.get('/projects')   // Example protected route
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.error('Error fetching projects:', error);
      });
  }, []);

  return (
    <Container maxWidth="sm">
      <Box sx={{ /* same styles as Admin */ }}>
        <Typography variant="h4" gutterBottom sx={{ color: 'primary.main', fontWeight: 'bold' }}>
          Manager Dashboard
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2 }}>
          Welcome, Manager! This is your dashboard.
        </Typography>

        <Typography variant="h6">Projects:</Typography>
        <ul>
          {projects.map((project) => (
            <li key={project._id}>{project.name}</li>
          ))}
        </ul>
      </Box>
    </Container>
  );
};

export default Manager;
