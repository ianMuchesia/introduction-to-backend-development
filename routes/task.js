const express = require("express");
const {
  getAllTasks,
  deleteTask,
  getTask,
  getSingleTask,
  updateTask,
  createTask
} = require("../controllers/tasksController");

const router = express.Router();

router.get("/", getAllTasks);
router.patch('/:id', updateTask)
router.delete('/:id', deleteTask)
router.get('/:id', getSingleTask)
router.post('/',createTask)

module.exports = router;
