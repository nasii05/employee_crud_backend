const mongoose = require('mongoose')
const dotenv = require('dotenv');
dotenv.config()

const dbUri = process.env.MONGOURI

mongoose.set('strictQuery', false)

module.exports = () => {
    return mongoose.connect(dbUri,
        { useNewUrlParser: true, useUnifiedTopology: true })
}