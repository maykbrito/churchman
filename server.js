const express = require('express')
const app = express()
const mongoose = require('mongoose')
const db = require('./config/keys').mongoURI


// Configure
// ==============================================
app.use(express.json());


// DB
// ==============================================
mongoose
.connect(db, { useNewUrlParser: true })
.then(() => console.log("Mongo connected"))
.catch(err => console.log("Mongo error: ", err))


// ROUTES
// ==============================================
app.use('/api/churchs', require('./app/routes/api/churchs'))
app.use('/api/members', require('./app/routes/api/members'))
app.use('/api/events', require('./app/routes/api/events'))
app.use('/api/records', require('./app/routes/api/records'))
app.use('/api/ministries', require('./app/routes/api/ministries'))

// RUN SERVER
// ==============================================
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`))