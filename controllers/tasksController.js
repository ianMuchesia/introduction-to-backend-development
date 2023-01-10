const Task = require("../models/taskModel");

//asynchronous wrappers
const asyncWrapper = require("../middleware/async");
const {createCustomError} = require('../errors/custom.error')
const getAllTasks = asyncWrapper(async (req, res) => {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  });
  
  const createTask = asyncWrapper(async (req, res) => {
    
      const task = await Task.create(req.body);
      res.status(201).json({ task });
   
  })
  
  const getTask = (req, res) => {
    res.send("get items");
  };
  const getSingleTask = asyncWrapper(async (req, res, next) => {
    
      const { id: taskID } = req.params;
      const task = await Task.findOne({ _id: taskID });
      if (!task) {
         return next(createCustomError(`No task with id :${taskID}`,404))
        
      }
  
      res.status(200).json({ task });
   
  });
  
  const deleteTask = asyncWrapper(async (req, res) => {
    
      const { id: taskID } = req.params;
      const task = await Task.findOneAndDelete({ _id: taskID });
      if (!task) {
        return next(createCustomError(`No task with id :${taskID}`,404))
      }
  
      res.status(200).json({ task });
   
  });
  
  const updateTask = asyncWrapper(async (req, res) => {
    
      const { id: taskID } = req.params;
  
      const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
        new: true,
        runValidators: true,
      });
      if (!task) {
        return next(createCustomError(`No task with id :${taskID}`,404))
      }
  
      res.status(200).json({ task });
   
  });

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  getSingleTask,
  updateTask,
  deleteTask,
};

/* const getAllTasks = async (req, res) => {
    try {
      const tasks = await Task.find({});
      res.status(200).json({ tasks });
    } catch (error) {
      res.status(500).json({ msg: error });
    }
  };
  
  const createTask = async (req, res) => {
    try {
      const task = await Task.create(req.body);
      res.status(201).json({ task });
    } catch (error) {
      res.status(500).json({ msg: error });
      // console.log(error);
    }
  };
  
  const getTask = (req, res) => {
    res.send("get items");
  };
  const getSingleTask = async (req, res) => {
    try {
      const { id: taskID } = req.params;
      const task = await Task.findOne({ _id: taskID });
      if (!task) {
        return res.status(404).json({ msg: `No task with id :${taskID}` });
      }
  
      res.status(200).json({ task });
    } catch (error) {
      res.status(500).json({ msg: error });
    }
  };
  
  const deleteTask = async (req, res) => {
    try {
      const { id: taskID } = req.params;
      const task = await Task.findOneAndDelete({ _id: taskID });
      if (!task) {
        return res.status(404).json({ msg: `No task with id :${taskID}` });
      }
  
      res.status(200).json({ task });
    } catch (error) {
      res.status(500).json({ msg: error });
    }
  };
  
  const updateTask = async (req, res) => {
    try {
      const { id: taskID } = req.params;
  
      const task = await Task.findOneAndUpdate({ _id: taskID }, req.body,{new:true,runValidators: true});
      if (!task) {
        return res.status(404).json({ msg: `No task with id :${taskID}` });
      }
  
      res.status(200).json({ task });
    } catch (error) {
      res.status(500).json({ msg: error });
    }
  }; */
