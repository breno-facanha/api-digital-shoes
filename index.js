const express = require('express')
const routes = require('./src/routes/routes.route')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())
app.use(express.urlencoded({ extended: true }))

app.use(express.json())
app.use(routes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
