// projectsRouter.js

const express = require('express');
const router = express.Router();
const projects = require('./projectsData');

// Маршрут для получения всех проектов
router.get('/', (req, res) => {
  res.json(projects);
});

module.exports = router;
