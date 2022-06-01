const express = require('express')
const res = require('express/lib/response')
const faker = require('faker')

const router = express.Router()

// Get parametrizado
router.get('/', (req, res) => {
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


// Get
router.get('/filter', (req, res) => {
    res.send('Prueba filter')
})


// Get parametrizado con datos fakes
router.get('/fakeData', (req, res) => {
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

// Insert
router.post('/', (request, response) => {
  // Parámetros a recibir
  const body = request.body
  response.json({
    message: 'Creado',
    data: body
  })
})

// Update (parcial, no "obliga" a enviar todos los atributos)
router.patch('/:id', (request, response) => {
  // Parámetros a recibir
  const { id } = request.params;
  const body = request.body
  response.json({
    message: 'Partial update',
    data: body,
    id
  })
})

// Update normal
router.put('/:id', (request, response) => {
  // Parámetros a recibir
  const { id } = request.params;
  const body = request.body
  response.json({
    message: 'Update normal',
    data: body,
    id
  })
})

// Delete
router.delete('/:id', (request, response) => {
  // Parámetros a recibir
  const { id } = request.params;
  response.json({
    message: 'Item eliminado',
    id
  })
})

// Exporto el módulo para su uso
module.exports = router
