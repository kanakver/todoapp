const express = require("express");
const app = express();
const {createTodo, updateTodo}= require('./types.js')
const {todo}=require("./db")
app.use(express.json())

app.post("/todo", async function(req,res){
    const createPayLoad = req.body;
    const parsedPayLoad = createTodo.safeParse(createPayLoad);
    if (!parsedPayLoad.success){
        res.status(411).json({
            msg: "you sent wrong input",
        })
    }
   const refobj= await todo.create({
        title: createPayLoad.title,
        description: createPayLoad.description,
        completed: false
    })
    console.log("task created with id ", res)
    res.json({
        msg:"todo created",
        id: refobj._id
    });
})

app.get("/todos", async function(req,res){
    const todos = await todo.find({});
    // console.log(todos);
    res.json({
        todos
    })
})

app.put("/completed", async function(req,res){
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success) {
        return res.status(411).json({
            msg: "You sent wrong input",
        });
    }
    await todo.updateOne({
        _id: req.body.id,
    },{
        completed: true,
    })
    res.json({
        msg: "todo is completed"
    })
})

app.put("/editTask", async function(req,res){
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success) {
        return res.status(411).json({
            msg: "You sent wrong input",
        });
    }
    await todo.updateOne({
        _id: req.body.id,
    },{
        title: req.body.title,
        description: req.body.description,
    })
    res.json({
        msg: "todo is completed"
    })
})
app.listen(5000);