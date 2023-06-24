const {Sequelize} = require("sequelize")
require("dotenv").config()

const connectdb = async() => {
    try {
        const database = new Sequelize(process.env.DB)
        await database.sync()
        console.log("databae conectada")
    } catch (error) {
        console.log(error)
    }
   

}

module.exports = connectdb


