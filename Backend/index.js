const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config()

main().then(() => { console.log("MongoDB Connected Successfully")}).catch(err => console.log(err));

const app = express()
const port = process.env.PORT || 5000

//middleware
app.use(express.json());
app.use(cors({
  origin: ['http://localhost:5173'],
  credentials: true
}))

//routes
const bookRoutes = require('./src/books/book.route.js')
app.use("api/books", bookRoutes);

//calling main function
async function main() {
  await mongoose.connect(process.env.URI);
  app.use('/', (req, res) => {
    res.send('Boundless-Books Server is Running!')
  })
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})