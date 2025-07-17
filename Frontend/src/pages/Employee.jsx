import { useEffect, useState } from 'react';
import { Container, Box, Typography } from '@mui/material';
import axiosInstance from '../api/axiosInstance';

const Employee = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axiosInstance.get('/tasks')   // Example protected route
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.error('Error fetching tasks:', error);
      });
  }, []);

  return (
    <Container maxWidth="sm">
      <Box sx={{ /* same styles as Admin */ }}>
        <Typography variant="h4" gutterBottom sx={{ color: 'primary.main', fontWeight: 'bold' }}>
          Employee Dashboard
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2 }}>
          Welcome, Employee! This is your dashboard.
        </Typography>

        <Typography variant="h6">Tasks:</Typography>
        <ul>
          {tasks.map((task) => (
            <li key={task._id}>{task.title}</li>
          ))}
        </ul>
      </Box>
    </Container>
  );
};

export default Employee;
