const express = require('express')
const routesApp = require('./routes')
// Middlewares
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler')

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
// Middlewares de error, estos se comportan de manera secuencial
app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)
