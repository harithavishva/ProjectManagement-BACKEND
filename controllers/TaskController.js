const mongoose  = require('mongoose');
const taskModel = require('../Models/TaskModel')

//To create a task-POST
const createTask = async(req,res)=>{
    const{title,description} = req.body

try {
    const task = await taskModel.create({title,description})
    res.status(200).json(task);

} catch (error) {
    res.status(400).json({ error:e.message });
}
};

//To get all Tasks-GET

const getTasks  = async(req,res)=>{
    try {
        const tasks = await taskModel.find({});
        res.status(200).json(tasks);
    
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

//To get single task by ID-GET

const getSingleTask  = async(req,res)=>{
const{id} = req.params
if(!mongoose.Types.ObjectId.isValid(id)){
return res.status(404).json({error:"Task not Found"})
}
try {
    const singletask = await taskModel.findById(id);
        res.status(200).json(singletask);
} catch (error) {
    res.status(400).json({ error: error.message });
}
}

    //To Update a Task - PATCH

const UpdateTask  = async(req,res)=>{
    const{id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error:"Task not Found"})
    }
    try {
        const task = await taskModel.findByIdAndUpdate({
                 _id:id
        },
        {
             ...req.body
        });
        res.status(200).json(task);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

//To Delete a Task-DELETE
const deleteTask  = async(req,res)=>{
    const{id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error:"Task not Found"})
    }
    try {
        const task = await taskModel.findByIdAndDelete(id);
        res.status(200).json(task);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }


}
module.exports = {createTask,getTasks,getSingleTask,UpdateTask,deleteTask};