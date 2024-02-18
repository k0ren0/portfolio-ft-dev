// server.js

import express from 'express';
import projects from './projectsData.js';

const app = express();
const PORT = process.env.PORT || 5050;



app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/api/projects', (req, res) => {
  res.json(projects);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

