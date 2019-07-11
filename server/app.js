const express = require('express');
const helmet = require('helmet');

const app = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const universitiesRouter = require('./routes/university/universities');
const universityPageRouter = require('./routes/university/university-page');

app.use('/universities/', universitiesRouter);
app.use('/universities/university_page/', universityPageRouter);

app.listen(3306, () => {
  console.log('Express connected...');
});
