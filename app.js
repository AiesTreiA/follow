const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const bookings = require('./routes/bookings');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/bookings', bookings);

app.use(express.static('public'));

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
