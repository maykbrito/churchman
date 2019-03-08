const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const db = require('./config/keys').mongoURI


// Configure
// ==============================================
app.use(express.static(__dirname + '/public'));
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
const churchs = require('./app/routes/api/churchs')
const members = require('./app/routes/api/members')
const events = require('./app/routes/api/events')
const records = require('./app/routes/api/records')
const ministries = require('./app/routes/api/ministries')

app.use('/api/churchs', churchs)
app.use('/api/members', members)
app.use('/api/events', events)
app.use('/api/records', records)
app.use('/api/ministries', ministries)

// RUN SERVER
// ==============================================
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`))