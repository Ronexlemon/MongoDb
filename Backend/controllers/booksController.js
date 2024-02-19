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
const getBooksByPagination =asyncHandler(async(req,res)=>{
    const page = req.query.p || 0;
    const bookPerPage =2;
    const db = getDb();
   

    let books =[]
    const data =  db.collection("books2").find()
    .sort({author:1})
    .skip(page*bookPerPage)
    .limit(bookPerPage)
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
const updateBookById = asyncHandler(async(req,res)=>{
    const { id } = req.body;
   

    const db = getDb()
    try{

        db.collection("books2").updateOne({_id:id},{$set:{rating:10}})
        res.json({message: "Successful update rating"})
    }catch(err){
        res.status(401).json({message:"failed to update"})

    }
     
        


})

module.exports ={
    AllBooks,
    getBookByAuthor,
    getBooksFromSameGenres,
    getBooksContainsOnlySameGenres,
    getBooksReviewsPerIndividual,
    updateBookById,
    getBooksByPagination
}