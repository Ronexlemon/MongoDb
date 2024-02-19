const express = require("express")

const router = express.Router()
const {AllBooks, getBookByAuthor, getBooksFromSameGenres, getBooksContainsOnlySameGenres, getBooksReviewsPerIndividual, updateBookById} = require("../../controllers/booksController")



router.get("/all",AllBooks)
router.post("/author",getBookByAuthor)
router.get("/genres",getBooksFromSameGenres)
router.get("/genres/only",getBooksContainsOnlySameGenres)
router.get("/reviews",getBooksReviewsPerIndividual)
router.patch("/update",updateBookById)

module.exports =  router;





