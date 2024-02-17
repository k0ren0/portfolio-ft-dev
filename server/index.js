const express = require('express');
const app = express();
const PORT = process.env.PORT || 5050;

// Моковые данные проектов
const projects = [
  { id: 1, name: "Project 1", description: "Description of project 1" },
  { id: 2, name: "Project 2", description: "Description of project 2" }
];

// Middleware для обработки JSON тел запросов
app.use(express.json());

// CORS Middleware для разработки (позволяет запросы с других портов)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// Маршрут для получения проектов
app.get('/api/projects', (req, res) => {
  res.json(projects);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
