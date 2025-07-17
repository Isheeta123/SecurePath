import React, { useState } from 'react';
import {
  Box,
  Typography,
  IconButton,
  Button,
  Divider,
  Tooltip,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import AssignmentIcon from '@mui/icons-material/Assignment';
import TaskIcon from '@mui/icons-material/Task';
import BusinessIcon from '@mui/icons-material/Business';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleToggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Box
      sx={{
        width: collapsed ? 72 : 220,
        height: '100vh',
        bgcolor: '#FF7043',
        color: '#fff8e1',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: collapsed ? 'center' : 'flex-start',
        padding: 2,
        boxShadow: 4,
        transition: 'width 0.3s',
      }}
    >
      {/* Toggle button */}
      <IconButton
        onClick={handleToggle}
        sx={{
          color: '#fff8e1',
          mb: 2,
          alignSelf: collapsed ? 'center' : 'flex-end',
        }}
      >
        {collapsed ? <MenuIcon /> : <ChevronLeftIcon />}
      </IconButton>

      {/* Admin title */}
      {!collapsed && (
        <Typography variant="h5" fontWeight="bold" sx={{ mb: 3 }}>
          Admin
        </Typography>
      )}

      <Divider sx={{ borderColor: '#fff8e1', mb: 2, width: '100%' }} />

      {/* Buttons */}
      <SidebarButton
        icon={<AssignmentIcon />}
        text="Projects"
        collapsed={collapsed}
        onClick={() => navigate('/projects')}
        active={location.pathname === '/projects'}
      />

      <SidebarButton
        icon={<TaskIcon />}
        text="Tasks"
        collapsed={collapsed}
        onClick={() => navigate('/tasks')}
        active={location.pathname === '/tasks'}
      />

      <SidebarButton
        icon={<BusinessIcon />}
        text="Company"
        collapsed={collapsed}
        onClick={() => navigate('/company')}
        active={location.pathname === '/company'}
      />
    </Box>
  );
};

const SidebarButton = ({ icon, text, collapsed, onClick, active }) => {
  return (
    <Tooltip title={collapsed ? text : ''} placement="right">
      <Button
        startIcon={collapsed ? null : icon}
        sx={{
          justifyContent: collapsed ? 'center' : 'flex-start',
          minWidth: collapsed ? 0 : '100%',
          mb: 2,
          bgcolor: active ? '#FFB300' : 'transparent',
          color: '#fff8e1',
          '&:hover': {
            bgcolor: '#FFB300',
          },
        }}
        onClick={onClick}
      >
        {collapsed ? icon : text}
      </Button>
    </Tooltip>
  );
};

export default Sidebar;