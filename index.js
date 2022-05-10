const express = require('express')
const faker = require('faker')

const app = express()
const puerto = 3000

app.get('/', (req, res) => {
  res.send('Prueba de get en servidor')
})

// Listado
app.get('/items', (req, res) => {
  res.json([
    {
      name: 'Item 1',
      value: 1000
    },
    {
      name: 'Item 2',
      value: 2000
    }
  ])
})

// Obtener especifico segun id
app.get('/items/:id', (req, res) => {
  const { id } = req.params
  res.json([
    {
      id,
      name: 'Item 1',
      value: 1000
    }
  ])
})

// Obtener item segun categoria
app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params
  res.json([
    {
      categoryId,
      productId
    }
  ])
})

// Get parametrizado
app.get('/products', (req, res) => {
  const { limit, offset } = req.query
  if(limit && offset) {
    res.json({
      limit,
      offset
    })
  } else {
    res.send('No hay parámetros')
  }
})

// Get parametrizado con datos fakes
app.get('/productsFake', (req, res) => {
  const products = []
  const { size } = req.query
  const limit = size || 10

  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl()
    })
  }
  res.json(products)

})


// Get
app.get('/products/filter', (req, res) => {
    res.send('Prueba filter')
})


app.listen(puerto, () => {
 console.log('Puerto '+ puerto)
})
