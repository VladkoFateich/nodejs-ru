const getCommentsHandler = (req, res) => {
  console.log('getCommentsHandler');
  res.send('GET COMMENTS ROUTE FROM EXPRESS');
};
const getSingleCommentHandler = (req, res) => {
  console.log(req.params);
  res.send(`GET COMMENT ROUTE. CommentId ${req.params.commentId}`);
};
//post отправляет данные на сервер
const postCommentsHandler = (req, res) => {
  console.log('postCommentsHandler');
  res.send('POST COMMENTS ROUTE FROM EXPRESS');
};
const deleteSingleCommentHandler = (req, res) => {
  console.log('deleteCommentHandler');
  res.send(`DELETE COMMENT ROUTE. CommentId ${req.params.commentId}`);
};

module.exports = {
  getCommentsHandler,
  getSingleCommentHandler,
  postCommentsHandler,
  deleteSingleCommentHandler,
};
