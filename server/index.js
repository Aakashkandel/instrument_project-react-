const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const userrouter = require('./routers/userrouter');
const bodyParser = require('body-parser');
const session=require('express-session');
const crypto = require('crypto');
const cookieParser = require('cookie-parser');



const app = express();
const PORT = 5000; 
app.use('/uploads',express.static('uploads'))
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

mongoose.connect('mongodb+srv://aakashkandel:Aakash12345@nodejs.mqjxskr.mongodb.net/reactproject?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log("Database is successfully Connected!");
    })
    .catch((e) => {
        console.log("Unable to connect with database", e);
    });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// const secretkey=crypto.randomBytes(32).toString('hex');
// console.log(secretkey);
// app.use(session({
//     secret: secretkey,
//     resave: false,
//     saveUninitialized: false,
//     cookie:{
//         secure:false,
//         maxAge:1000*60*60*24,
//     }
// }));


app.use(cookieParser())

app.use(userrouter);


app.get('/', (req, res) => {
    res.send("Hello world!");
});
