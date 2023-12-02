
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  let result = 1 + 2
  result = result * 8
  res.send( `the result is ${result}`)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

