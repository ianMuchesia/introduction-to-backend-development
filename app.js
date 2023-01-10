const connectDB = require("./db/connect");
const express = require("express");
const app = express();
require('dotenv').config()
const notFound = require('./middleware/notFound')
const errorHandler = require('./middleware/error-handler')

const port = process.env.PORT || 3000;

//middleware
app.use(express.static('./public'))
app.use(express.json());
//routes
const tasks = require("./routes/task");
//
app.use("/api/v1/tasks", tasks);
app.use(errorHandler)
app.use(notFound)


/* app.get("/", (req, res) => {
  res.send("Hello world");
}); */

///api/v1/tasks  -get all tasks
//post('api/v1/tasks')   -create all new tasks
//app.get('/api/v1/tasks/:id')  -get single task
//app.patch('api.v1/tasks/:id')  -update task
//app.delete('api/v1/tasks/;id) -delete task
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server listening on port ${port}..`));
  } catch (error) {
    console.log(error);
  }
};
start();
