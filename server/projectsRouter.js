// projectsRouter.js

import express from 'express';
import projects from './projectsData.js'; 

const router = express.Router();

router.get('/', (req, res) => {
  res.json(projects);
});

export default router; 
