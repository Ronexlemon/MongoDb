const {MongoClient} = require("mongodb")
let dbConnection;


module.exports ={
    connectToDb: (cb)=>{
        MongoClient.connect("mongodb://localhost:27017/bookstore")
        .then((client)=>{
         dbConnection =   client.db()
         return cb();
         console.log("Success db Connection")
        }).catch(err =>{
            console.log("db Error")
            return cb(err)
        })

    },
    getDb: ()=> dbConnection 

}