const express = require("express");
const app = express();
const {createTodo, updateTodo}= require('./types.js')

app.use(express.json())
app.post("/todo", function(req,res){
    const createPayLoad = req.body;
    const parsedPayLoad = createTodo.safeParse(createPayLoad);
    if (!parsedPayLoad.success){
        res.status(411).json({
            msg: "you sent wrong input",
        })
    }
    return;
})

app.get("/todos", function(req,res){

})

app.put("/completed", function(req,res){
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success) {
        return res.status(411).json({
            msg: "You sent wrong input",
        });
    }
    return success;
})