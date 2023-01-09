const express = require('express')

const app = express()

const port = 3000

//middleware
app.use(express.json())
//routes
const tasks = require("./routes/task")


app.use('/api/v1/tasks', tasks)
app.get("/", (req, res)=>{
    res.send("Hello world")
})

///api/v1/tasks  -get all tasks
//post('api/v1/tasks')   -create all new tasks
//app.get('/api/v1/tasks/:id')  -get single task
//app.patch('api.v1/tasks/:id')  -update task
//app.delete('api/v1/tasks/;id) -delete task
 
app.listen(port,console.log(`server listening on port ${port}...`))
