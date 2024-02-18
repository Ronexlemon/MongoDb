const express = require("express");
//init app middleware
const cors = require("cors");

const {connectToDb,getDb} = require("../Backend/config/db")
const books = require("../Backend/routes/Books/route");

const app = express(); // Initialize Express app
//database connect
let db;
connectToDb((err)=>{
    if (!err){
        app.listen(3000, () => {
            console.log(`App listening on port ${3000}`);
        });
        db = getDb()
        

    }

})

app.use(cors()); // Use cors middleware

//routes
app.use("/books", books);


