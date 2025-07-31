require('dotenv').config({ path: 'testing.env' });

const express = require('express');
const pool = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`Welcome to the Node.js App in ${process.env.ENVIRONMENT} Environment!`);
});

app.get('/healthz', (req, res) => {
  res.status(200).send('OK');
});

app.get('/db-check', async (req, res) => {
  try {
    await pool.query('SELECT 1'); // simple query to check DB connectivity
    res.status(200).send('Connected');
  } catch (err) {
    console.error('Database connection failed:', err.message);
    res.status(500).send('Database connection failed');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get('/db-check', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.status(200).send(`DB connection successful: ${result.rows[0].now}`);
  } catch (error) {
    console.error('DB connection failed:', error);
    res.status(500).send('Database connection failed');
  }
});

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});

