const express = require("express"); //express framework lae liya
const router = express.Router(); //router ka instance lae liya 

//import controller
const {createTodo} = require("../controllers/createTodo");
const {getTodo, getTodoById} = require("../controllers/getTodo");
const {updateTodo} = require("../controllers/updateTodo");
const {deleteTodo} = require("../controllers/deleteTodo");

//define APi routes
router.post("/createTodo", createTodo);
router.get("/getTodos", getTodo); 
router.get("/getTodos/:id", getTodoById);
router.put("/updateTodo/:id", updateTodo);
router.delete("/deleteTodo/:id", deleteTodo);
// deleteMethod -> path -> parameter -> handler so handler kha sae aaya above controller mae sae.

module.exports = router;