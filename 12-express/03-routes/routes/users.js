const express = require('express');
const {
  getUsersHandler,
  getSingleUserHandler,
  postUsersHandler,
} = require('../controllers/users');
const router = express.Router();

router.get('/', getUsersHandler);
router.post('/', postUsersHandler);
router.get('/:userId', getSingleUserHandler);

module.exports = router;
