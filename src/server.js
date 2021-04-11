const mongoose = require('mongoose');
const app = require('./app');
const auth = require('./config/auth.json');

mongoose.connect(auth['secret-db'], {
  useNewUrlParser: true,
});
app.listen(3333);
