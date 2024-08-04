const express = require('express');
const connectDB = require('./config/db');
const morgan = require('morgan');
require('dotenv').config();

// console.log(process.env);

const app = express();

// Connect Database
connectDB();

// Init Middleware for parsing response into JSON format
app.use(express.json({ extended: false }));

// Express Logger called Morgan
app.use(morgan('dev'));

app.get('/', (req, res) => res.send(`API Running...`));

// Define Routes
app.use('/api/alive', require('./routes/api/alive'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/emailer', require('./routes/api/emailer'));
app.use('/api/domain', require('./routes/api/domain'));
app.use('/api/template-type', require('./routes/api/template-type'));
app.use('/api/sendmail', require('./routes/api/sendmail'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {console.log(`Server started on PORT ${PORT}`)});
