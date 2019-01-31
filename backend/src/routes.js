const routes = require('express').Router();
const multer = require('multer');
const multerCongig = require('./config/multer');

routes.post('/posts', multer(multerCongig).single('file'), (req, res) => {
  console.log(req.file);
  return res.json({ hello: 'arthur' });
});

module.exports = routes;
