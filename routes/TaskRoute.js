const express = require('express')

const router = express.Router()

const {createTask,getTasks, getSingleTask,UpdateTask,deleteTask} = require('../controllers/TaskController')

router.post('/',createTask);
router.get('/',getTasks);
router.get("/:id",getSingleTask);
router.patch("/:id",UpdateTask);
router.delete("/:id",deleteTask);







module.exports = router;