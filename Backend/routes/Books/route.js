const express = require("express")

const router = express.Router()
const {AllBooks, getBookByAuthor, getBooksFromSameGenres, getBooksContainsOnlySameGenres, getBooksReviewsPerIndividual} = require("../../controllers/booksController")



router.get("/all",AllBooks)
router.post("/author",getBookByAuthor)
router.get("/genres",getBooksFromSameGenres)
router.get("/genres/only",getBooksContainsOnlySameGenres)
router.get("/reviews",getBooksReviewsPerIndividual)

module.exports =  router;





