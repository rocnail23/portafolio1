const express = require("express")
const cors = require("cors")
const helmet = require("helmet")
const db = require("./src/db/db")
require("dotenv").config()

const app = express()
app.use(cors())
app.use(express.json())





const PORT = process.env.PORT || 8080

db()

app.listen(PORT, () => {

    console.log("la app esta escuchando en el puert " + PORT)
})