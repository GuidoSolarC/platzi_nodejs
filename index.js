const express = require('express')
const routesApp = require('./routes')

const app = express()
const port = 3000

// Middleware
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Get en raiz')
})

app.listen(port, () => {
 console.log('Puerto '+ port)
})

routesApp(app)
