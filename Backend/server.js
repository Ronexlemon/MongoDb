const express = require("express")
//init app middleware
const Cors = require("cors")

const books = require("../Backend/routes/Books/route")

const App = express();

App.use(Cors)



App.listen(3000,()=>{
    console.log(`App listening on port ${3000}`)
})

//routes
App.use("/books",books)

