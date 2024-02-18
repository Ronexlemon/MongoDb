const express = require("express")

const router = express.Router()
const AllBooks = require("../../controllers/booksController")



router.get("/all",AllBooks)

module.exports = {
    router
}



