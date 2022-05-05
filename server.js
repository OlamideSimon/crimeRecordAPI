const express = require('express')
const connectDb = require('./config/db')
const { errorHandler } = require('./middlewares/errorMiddleware')
const crimeRoute = require('./routes/crimeRoutes')
const userRoute = require('./routes/userRoutes')
require('dotenv').config()

const app = express()
const port = process.env.PORT

connectDb()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/crimes', crimeRoute)
app.use('/api/users', userRoute)

app.use(errorHandler)

if (port == null || port == "") {
  port = 8000;
}
app.listen(port);
