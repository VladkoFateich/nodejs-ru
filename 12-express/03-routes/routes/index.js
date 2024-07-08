const express = require('express');
const router = express.Router();
const commentsRouter = require('./comments');
const usersRouter = require('./users');
const rootRouter = require('./root');

router.use('/comments', commentsRouter);
router.use('/users', usersRouter);
router.use('/', rootRouter); // первым его не ставить инача он будет отбрабатывать все!!!

module.exports = router;
