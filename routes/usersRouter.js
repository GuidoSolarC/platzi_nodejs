const express = require('express')
const router = express.Router()

// Listado
router.get('/', (req, res) => {
  res.json([
    {
      name: 'Usuario 1',
      edad: 50
    },
    {
      name: 'Usuario 2',
      edad: 20
    }
  ])
})

// Obtener especifico segun id
router.get('/:id', (req, res) => {
  const { id } = req.params
  res.json([
    {
      id,
      name: 'Usuario 1',
      edad: 50
    }
  ])
})

module.exports = router
