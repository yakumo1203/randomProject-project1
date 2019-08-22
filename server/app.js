const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();

app.use(helmet());
app.use(morgan('short'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const universitiesRouter = require('./routes/university/universities');
const universityPageRouter = require('./routes/university/university-page');

app.use('/universities/', universitiesRouter);
app.use('/universities/university_page/', universityPageRouter);

app.listen(3306, '127.0.0.1', (err) => {
  if (err) throw err;
  console.log('Express connection established...');
});
