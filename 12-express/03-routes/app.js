const express = require('express');
const app = express();

const router = require('./routes/index'); // при импорте из index, /index можно не писать

//comments вынес в модуль

//users вынес в модуль

//можно сгрупперовать
// app.route('/comments').get(getCommentsHandler).post(postCommentsHandler);

app.use(router);
app.listen(3333, () => {
  console.log('Server was started on port 3333');
});
