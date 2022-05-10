const express = require('express')
const router = express.Router()

// Obtener item segun categoria
router.get('/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params
  res.json([
    {
      categoryId,
      productId
    }
  ])
})


module.exports = router
