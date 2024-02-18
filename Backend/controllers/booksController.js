const asyncHandler = require("express-async-handler")


const AllBooks =asyncHandler(async(req,res)=>{
    res.json({message:"Getting all books"})


})

module.exports ={
    AllBooks
}