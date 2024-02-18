const express = require("express");
//init app middleware
const cors = require("cors");

const books = require("../Backend/routes/Books/route");

const app = express(); // Initialize Express app

app.use(cors()); // Use cors middleware

//routes
app.use("/books", books);


app.listen(3000, () => {
    console.log(`App listening on port ${3000}`);
});
