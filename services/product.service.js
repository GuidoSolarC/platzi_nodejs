// La idea es tener la logica de negocios en los servicios
const faker = require('faker')

class ProductsService {

    constructor() {
        this.products = []
        this.generate()
    }

    // Metodos "x", se crean segun lo necesitemos
    generate() {
        const limit = 100
        for (let index = 0; index < limit; index++) {
          this.products.push({
            id: faker.datatype.uuid(),
            name: faker.commerce.productName(),
            price: parseInt(faker.commerce.price(), 10),
            image: faker.image.imageUrl()
          })
        }
    }

    create() {

    }

    find(id) {
        return this.products.find(item => item.id === id)
    }

    findAll() {
        return this.products
    }


}

module.exports = ProductsService