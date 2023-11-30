const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            maxLength:50,
        },
        email: {
            type: String,
            required: true,
            unique: true, // Ensures that each email is unique
            trim: true, // Removes leading and trailing whitespaces
        },
        phoneno: {
            type: String,
            required: true,
            unique: true, // Ensures that each phone number is unique
            trim: true, // Removes leading and trailing whitespaces
        },
        description: {
            type:String,
            required:true,
            maxLength:50,
        },
        createdAt:{
            type:Date,
            required:true,
            default:Date.now(),
        },
        updatedAt:{
            type:Date,
            required:true,
            default:Date.now(),
        }
    }
);

module.exports = mongoose.model("Todo", todoSchema);





/* so model create karne kae liye hmko doo chizo ki zarurat padti hae vo hae naam or Schema so todo schema kae andar ham btate hae kon si chiz kis type ki hae.

*/