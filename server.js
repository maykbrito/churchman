const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const db = require('./config/keys').mongoURI


// Configure
// ==============================================
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


// DB
// ==============================================
mongoose
.connect(db)
.then(() => console.log("Mongo connected"))
.catch(err => console.log("Mongo error: ", err))


// ROUTES
// ==============================================
const churchs = require('./routes/api/churchs')


app.use('/api/churchs', churchs)


// RUN SERVER
// ==============================================
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`))