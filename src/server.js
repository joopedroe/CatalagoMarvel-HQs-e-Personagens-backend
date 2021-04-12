const mongoose = require('mongoose');
const app = require('./app');

require("dotenv").config()

mongoose.connect(process.env.SECRET_DB, {
  useNewUrlParser: true,
  
}); 
app.listen(process.env.PORT || 3333);
