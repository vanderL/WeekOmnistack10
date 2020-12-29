const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes')

const app = express()

mongoose.connect('mongodb://localhost/semanaOmnistack10', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}
).then(() => console.log('connection succesful mongodb'))
  .catch((err) => console.error('Deu erro: '+ err));

app.use(cors())
app.use(express.json())
app.use(routes)


app.listen(3333)