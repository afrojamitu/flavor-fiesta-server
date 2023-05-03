const express = require('express')
const app = express()
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const chefs = require('./Data/chef.json')

app.get('/', (req, res) => {
  res.send('Flavor fiesta coming!')
})

app.get('/chefs', (req, res) => {
  res.send(chefs);
})

app.listen(port, () => {
  console.log(`Flavor fiesta listening on port ${port}`)
})