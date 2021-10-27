const dotenv = require('dotenv').config();
const connect = require('./database/connect')
const data = require('./data.json')
const Product = require('./models/product')
connect();

const start = async () => {
    try {
        await Product.deleteMany()
        await Product.create(data)
        console.log('Success!!!!')
        process.exit(0)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

start()

