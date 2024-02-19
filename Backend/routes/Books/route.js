const express = require("express")

const router = express.Router()
const {AllBooks, getBookByAuthor, getBooksFromSameGenres} = require("../../controllers/booksController")



router.get("/all",AllBooks)
router.post("/author",getBookByAuthor)
router.get("/genres",getBooksFromSameGenres)

module.exports =  router;





