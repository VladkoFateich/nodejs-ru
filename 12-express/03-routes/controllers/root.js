const getRootHandler = (req, res) => {
  console.log('getRootHandler');
  res.send('<h1>RESPONSE FROM EXPRESS</h1>');
};

module.exports = {
  getRootHandler,
};
