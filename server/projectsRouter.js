// projectsRouter.js

const express = require('express');
const router = express.Router();
const projects = require('./projectsData');

router.get('/', (req, res) => {
  res.json(projects);
});

module.exports = router;
