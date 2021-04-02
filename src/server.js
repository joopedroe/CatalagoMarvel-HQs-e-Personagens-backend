const app = require('./app');
const mongoose = require('mongoose');
const auth = require('./config/auth.json');

mongoose.connect(auth['secret-db'],{
    useNewUrlParser: true
});

app.listen(3333);