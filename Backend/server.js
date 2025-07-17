require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const { connectDB } = require('./config/db');
const userRouter = require('./routers/userRouter');
const projectRouter = require('./routers/projectRouter');
const taskRouter = require('./routers/taskRouter');
const authRouter = require('./routers/authRouter');
const { logger } = require('./utils/logger');

const app = express();

// CORS (Allow API requests from dev server if needed)
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());

// API Routes
app.use('/api/users', userRouter);
app.use('/api/projects', projectRouter);
app.use('/api/tasks', taskRouter);
app.use('/api/auth', authRouter);

// Serve React build files (from Frontend/dist)
const reactBuildPath = path.join(__dirname, '..', 'Frontend', 'dist');
app.use(express.static(reactBuildPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(reactBuildPath, 'index.html'));
});

// Error Handler
app.use((err, req, res, next) => {
  logger.error(err.stack);
  res.status(500).json({ message: 'Something went wrong' });
});

// Start Server
const PORT = process.env.PORT || 3000;

connectDB().then(() => {
  app.listen(PORT, () => {
    logger.info(`Server running on port ${PORT}`);
  });
}).catch((err) => {
  logger.error('Database connection failed:', err);
});
