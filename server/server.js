// server.js

import express from 'express';
import projects from './projectsData.js';

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/api/projects', (req, res) => {
  res.json(projects);
});

const SERVER = process.env.SERVER || 5050;
app.listen(SERVER, () => console.log(`Server running on port ${SERVER}`));

