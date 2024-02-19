const asyncHandler = require("express-async-handler")
const {getDb} = require("../config/db")




const AllBooks =asyncHandler(async(req,res)=>{
    const db = getDb();
   

    let books =[]
    const data =  db.collection("books2").find()
    .sort({author:1})
    .forEach(book => books.push(book))
    .then(()=>{
      res.status(200).json(books)
    })
    .catch(()=>{
      res.status(500).json({error: "Could not fetch the documents"})
    });
    


})

const getBookByAuthor = asyncHandler(async(req,res)=>{
    const { name,id } = req.body;
   

    const db = getDb()
    let books =[]
    const data =  db.collection("books2").find({author: name})
        .forEach(book => books.push(book))
    .then(()=>{
      res.status(200).json(books)
    })
    .catch(()=>{
      res.status(500).json({error: "Could not fetch the documents"})
    });
    


})
const getBooksFromSameGenres = asyncHandler(async(req,res)=>{
    const { genre } = req.body;
   

    const db = getDb()
    let books =[]
    const data =  db.collection("books2").find({genres: genre})
        .forEach(book => books.push(book))
    .then(()=>{
      res.status(200).json(books)
    })
    .catch(()=>{
      res.status(500).json({error: "Could not fetch the documents"})
    });


})

const getBooksContainsOnlySameGenres = asyncHandler(async(req,res)=>{
    const { genre } = req.body;
   

    const db = getDb()
    let books =[]
    const data =  db.collection("books2").find({genres: {$nin: [genre]}})
        .forEach(book => books.push(book))
    .then(()=>{
      res.status(200).json(books)
    })
    .catch(()=>{
      res.status(500).json({error: "Could not fetch the documents"})
    });


})

const getBooksReviewsPerIndividual = asyncHandler(async(req,res)=>{
    const { name } = req.body;
   
//nested array
    const db = getDb()
    let books =[]
    const data =  db.collection("books2").find({"reviews.name": name})
        .forEach(book => books.push(book))
    .then(()=>{
      res.status(200).json(books)
    })
    .catch(()=>{
      res.status(500).json({error: "Could not fetch the documents"})
    });


})

module.exports ={
    AllBooks,
    getBookByAuthor,
    getBooksFromSameGenres,
    getBooksContainsOnlySameGenres,
    getBooksReviewsPerIndividual
}