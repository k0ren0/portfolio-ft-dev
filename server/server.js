// // server.js

// server.js
import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import cors from 'cors'; 

dotenv.config();

const app = express();
app.use(express.json());

// Настройки CORS
const corsOptions = {
    origin: process.env.REACT_APP_CLIENT_URL_SEND, 
    optionsSuccessStatus: 200 // некоторые устаревшие браузеры (IE11, разные SmartTV) ограничены до 204
};
app.use(cors(corsOptions));

// Настройки nodemailer для использования с почтовым сервисом
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE, // Используем переменную окружения для указания сервиса
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  }
});

// Обработчик POST запроса для отправки электронной почты
app.post('/api/send-email', (req, res) => {
  const { name, email, message } = req.body;
  
  const mailOptions = {
    from: `"${name}" <${email}>`, // Отправитель
    to: process.env.EMAIL_TO, // Получатель
    subject: 'New Contact Form Submission', // Тема письма
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`, // Текст письма
    html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>` // HTML тело письма
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error sending email'); // Ошибка при отправке
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully'); // Успешно отправлено
    }
  });
});

// Запуск сервера
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));




// import express from 'express';
// import projectsRouter from './projectsRouter.js';
// import nodemailer from 'nodemailer';
// import dotenv from 'dotenv';

// dotenv.config();

// const app = express();

// app.use(express.json());

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   next();
// });

// app.use('/api/projects', projectsRouter);

// // settings nodemailer
// const transporter = nodemailer.createTransport({
//   service: process.env.EMAIL_SERVICE,
//   auth: {
//     user: process.env.EMAIL_USERNAME,
//     pass: process.env.EMAIL_PASSWORD
//   }
// });

// // routes to send email
// app.post('/api/send-email', (req, res) => {
//   const { name, email, message } = req.body;
  
//   const mailOptions = {
//     from: `"${name}" <${email}>`,
//     to: 'korneevv@gmail.com', // my email 
//     subject: 'New Contact Form Submission',
//     text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
//     html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.log(error);
//       res.status(500).send('Error sending email');
//     } else {
//       console.log('Email sent: ' + info.response);
//       res.status(200).send('Email sent successfully');
//     }
//   });
// });

// const PORT = process.env.PORT || 5050;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
