const express = require("express");
//init app middleware
const cors = require("cors");

const {connectToDb, getDb} = require("../Backend/config/db")
const books = require("../Backend/routes/Books/route");

const app = express(); // Initialize Express app
app.use(cors()); // Use cors middleware
//database connect

connectToDb((err)=>{
    if (!err){
        app.listen(3000, () => {
            console.log(`App listening on port ${3000}`);
        });
        
        
        

    }

})



//routes
app.use("/books", books);
app.get("/sf",(req,res)=>{
    
 // console.log(data)
  //res.json({mssg : JSON.stringify(data)})
})



