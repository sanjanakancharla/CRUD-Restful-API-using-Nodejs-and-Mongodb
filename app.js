const express = require('express');

const app = express();
const mongoose = require('mongoose');

const bodyParser = require('body-parser');
require('dotenv/config');


//Import routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);


//ROUTES

app.get('/',(req,res)=> {
    res.send("we are on home");
})

app.get('/posts',(req,res)=> {
    res.send("we are on posts");
})

mongoose.connect(
    process.env.DB_CONNECTION,
     { useUnifiedTopology: true },
     () => console.log('connected to DB!')
     );

app.listen(5000);

