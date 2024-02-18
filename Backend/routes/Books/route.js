const express = require("express")

const router = express.Router()
const {AllBooks, getBookByAuthor} = require("../../controllers/booksController")



router.get("/all",AllBooks)
router.post("/author",getBookByAuthor)

module.exports =  router;





