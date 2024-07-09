import express from 'express';
//внешний npm пакет для логирования
import morgan from 'morgan';
// import qs from 'querystring';

const app = express();

//делаю через пакет morgan
// const logger = (req, res, next) => {
//   //логирует каждый запрос
//   console.log(req.method, req.path);
//   next();
// };
// app.use(logger);

// app.use(morgan('combined'));
app.use(morgan('tiny')); // логирует информацию в консоль Returns middleware

app.use(express.json()); //Конвертирует JSON в объект js и записывает свойства в req.body Returns middleware

app.use(express.urlencoded({ extended: true })); //Returns middleware парсинг строк  true означает что используется внешний модуль qs для конвертации формы в обьект. qs она из зависимостей  модулья express

app.use((req, res) => {
  console.log(req.body);
  res.send('This is express server');
});

app.listen(5000, () => {
  console.log('Server is listening at port 5000');
});
