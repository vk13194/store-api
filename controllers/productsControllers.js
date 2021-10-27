const Product = require('../models/product')
const getallProducts = async (req, res) => {
    const { featured, company, name } = req.query;
    const queryObject = {}
    if (featured) {
        queryObject.featured == featured === 'true' ? 'true' : false
    }
    if (company) {
        queryObject.company = company
    }
    if (name) {
        queryObject.name = { $regex: name, $options: 'i' }
    }
    console.log(queryObject)
    const product = await Product.find(queryObject)
    res.status(200).json({ msg: "all products", total: product.length, product: product, })

}

module.exports = {
    getallProducts
}