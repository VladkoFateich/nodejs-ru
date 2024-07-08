const getUsersHandler = (req, res) => {
  console.log('getCommentsHandler');
  res.send('GET USERS ROUTE FROM EXPRESS');
};
const getSingleUserHandler = (req, res) => {
  console.log(req.params);
  res.send(`GET USER ROUTE. CommentId ${req.params.commentId}`);
};
//post отправляет данные на сервер
const postUsersHandler = (req, res) => {
  console.log('postCommentsHandler');
  res.send('POST USERS ROUTE FROM EXPRESS');
};

module.exports = {
  getUsersHandler,
  getSingleUserHandler,
  postUsersHandler,
};
