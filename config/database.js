/*
database.js file ka kaam hae ki connection ensure krna between your application and your db.
*/

const mongoose = require("mongoose");

require("dotenv").config(); // is line ka matlab yhe hae ki jo bhi hmne env kae andar define kra hoga vo sara ka sara loard ho jayega aapke process object kae andar.

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        //this below is  deprecated lines
        useNewUrlParser:true,
        useUnifiedTopology: true,


    }) // -> promises -> resolve -> reject
    .then(() => console.log("Db ka Connection is Successful"))
    .catch( (error) => {
        console.log("Issue in DB Connection");
        console.error(error.message);
        //iska matlab kya hota hae ? h.w
        process.exit(1);
    } );
}

module.exports = dbConnect;