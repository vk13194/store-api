const mongoose = require('mongoose');

const connect = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URl, {

        })

        console.log(`MongoDB Connected`)
    } catch (error) {
        console.error(`mongodb not connected`)
        process.exit(1)
    }
}

module.exports = connect