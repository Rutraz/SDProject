const express = require ('express');
const app = express();
const mongoose = require ('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');


//Middlewares
app.use(cors());
app.use(bodyParser.json())


//Import Routes
const postsRoute = require('./routes/posts')

app.use('/posts', postsRoute );

//ROUTES 
app.get('/', (req,res) =>{
    res.send('We are on home');
});


//CONNECT TO DB
mongoose.connect(
    'mongodb+srv://rutra:12qwaszx34@cluster0.yv0dq.mongodb.net/teste123?retryWrites=true&w=majority',
    {useUnifiedTopology: true ,
    useNewUrlParser: true },
    () => console.log('Connected DB!')
);


//listenning to the server
app.listen(80, '0.0.0.0');