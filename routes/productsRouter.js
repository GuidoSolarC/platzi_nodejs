const express = require('express')
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
module.exports = router
