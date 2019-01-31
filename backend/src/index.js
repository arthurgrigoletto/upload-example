const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();
mongoose.connect(
  'mongodb://arthurgrigoletto:Lima9608@ds255364.mlab.com:55364/upload-example',
  {
    useNewUrlParser: true
  }
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use(require('./routes'));
app.listen(3000);
