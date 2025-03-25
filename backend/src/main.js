const express = require('express')


const app = express()
const port = 3001
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/example-json-endpoint', (req, res) => {
  const data = {
    message: "hello",
    itemsInCart: [
      "hammer",
      "bowling ball"
    ]
  }
  res.json(data)
})

app.post('/mirror', (req, res) => {
  console.log(req.body);      // your JSON
  res.send(req.body);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
