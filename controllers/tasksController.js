const getAllTasks=(req,res)=>{
    res.send("all items")
}

const createTask=(req,res)=>{
    
    res.json(req.body)
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