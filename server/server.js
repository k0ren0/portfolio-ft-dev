// server.js

const express = require('express');
const app = express();
const PORT = process.env.PORT || 5050;

const projects = require('./projectsData'); 

app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/api/projects', (req, res) => {
  res.json(projects);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


