const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');

const {getData} = require('./utils/data');

app.set('view engine', 'ejs');
app.use(expressLayouts);

app.get('/', (req, res) => {

  let dataJson = getData();

  res.render('index', {
    title: 'Home',
    layout: 'templates',
    data: dataJson
  });
});


app.listen(3000, () => {
  console.log('listening on port 3000');
});

