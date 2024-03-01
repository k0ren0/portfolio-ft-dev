// // server.js

import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import cors from 'cors';
import projectsRouter from './projectsRouter.js'; 

dotenv.config();

const app = express();
app.use(express.json());

const corsOptions = {
    origin: process.env.REACT_APP_CLIENT_URL_SEND, 
    optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  },
});

// Использование projectsRouter для обработки запросов к /api/projects
app.use('/api/projects', projectsRouter);

app.post('/api/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const response = await transporter.sendMail({
      from: `"${name}" <${email}>`, 
      to: process.env.EMAIL_TO, 
      subject: 'New Contact Form Submission', 
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`, 
      html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`, 
    });

    console.log('Email sent: ' + response);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send('Error sending email: ' + error.message);
  }
});


const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));





// import express from 'express';
// import nodemailer from 'nodemailer';
// import dotenv from 'dotenv';
// import cors from 'cors';

// dotenv.config();

// const app = express();
// app.use(express.json());

// // Настройка CORS
// const corsOptions = {
//     origin: process.env.REACT_APP_CLIENT_URL_SEND, // Убедитесь, что переменная окружения задана на Render.com
//     optionsSuccessStatus: 200,
// };
// app.use(cors(corsOptions));

// // Импорт и использование других роутеров
// import projectsRouter from './projectsRouter.js';
// app.use('/api/projects', projectsRouter);

// // Настройки nodemailer
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.EMAIL_USERNAME,
//     pass: process.env.EMAIL_PASSWORD,
//   },
// });

// app.post('/api/send-email', (req, res) => {
//   const { name, email, message } = req.body;
  
//   const mailOptions = {
//     from: `"${name}" <${email}>`,
//     to: process.env.EMAIL_TO,
//     subject: 'New Contact Form Submission',
//     text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
//     html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error("Error sending email:", error);
//       return res.status(500).send('Error sending email');
//     }
//     console.log('Email sent: ' + info.response);
//     return res.status(200).send('Email sent successfully');
//   });
// });

// const PORT = process.env.PORT || 5050;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });





// import express from 'express';
// import projectsRouter from './projectsRouter.js';
// import nodemailer from 'nodemailer';
// import dotenv from 'dotenv';
// import cors from 'cors'; 

// dotenv.config();

// const app = express();

// app.use(express.json());


// const corsOptions = {
//     origin: process.env.REACT_APP_CLIENT_URL_SEND, 
//     optionsSuccessStatus: 200
// };
// app.use(cors(corsOptions));

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   next();
// });


// app.use('/api/projects', projectsRouter);


// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.EMAIL_USERNAME, 
//     pass: process.env.EMAIL_PASSWORD, 
//   }
// });

// app.post('/api/send-email', (req, res) => {
//   const { name, email, message } = req.body;
  
//   const mailOptions = {
//     from: `"${name}" <${email}>`,
//     to: process.env.EMAIL_TO,
//     subject: 'New Contact Form Submission',
//     text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
//     html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`
//   };

//   console.log("Attempting to send email with options:", mailOptions);

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error("Error sending email:", error);
//       res.status(500).send('Error sending email');
//     } else {
//       console.log('Email sent: ' + info.response);
//       res.status(200).send('Email sent successfully');
//     }
//   });
// });

// const PORT = process.env.PORT || 5050;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));




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
