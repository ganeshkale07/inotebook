const connectToDb  = require("./db");
const express = require("express");

connectToDb();

const app = express()
const port = 5000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
app.use(express.json())
// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/note', require('./routes/notes'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})