const Task = require('../models/taskModel')
const getAllTasks=(req,res)=>{
    res.send("all items")
}

const createTask=async(req,res)=>{
    const task = await Task.create(req.body)
    res.status(201).json({task})
}

const getTask=(req,res)=>{
    res.send("get items")
}
const getSingleTask=(req,res)=>{
    res.json({id:req.params.id})
}
const updateTask=(req,res)=>{
    res.send("updateTask")
}
const deleteTask=(req,res)=>{
    res.send("delete task")
}

module.exports = {getAllTasks,createTask,getTask,getSingleTask,updateTask,deleteTask}