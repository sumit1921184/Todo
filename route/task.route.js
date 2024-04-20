const mongoose = require('mongoose');
const express = require('express');
const { TaskModel } = require('../model/task.model');
require('dotenv').config();

const taskRouter = express.Router();

taskRouter.get("/", async (req, res) => {
    try {
        const { userId } = req.body;
        const usersTasks = await TaskModel.find({userId}) ;
        res.status(200).json({tasks: usersTasks});
    } catch (err) {
        res.status(500).json({msg: "Internal Server Error", err});
    }
})





taskRouter.post("/add", async (req, res) => {
    try {
        const { title, status } = req.body;
        const newTask = new TaskModel({ title, status });
        await newTask.save();
        res.status(200).json({msg: "Task Added Successfully", newTask});
    } catch (err) {
        res.status(500).json({msg: "Internal Server Error", err});
    }
})


taskRouter.patch("/update/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { title, status } = req.body;
        const updatedTask = await TaskModel.findByIdAndUpdate({_id: id}, { title, status });
        res.status(200).json({msg: "Task Updated Successfully", updatedTask});
    } catch (err) {
        res.status(500).json({msg: "Internal Server Error", err});
    }
})


taskRouter.delete("/delete/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletedTask = await TaskModel.findByIdAndDelete({_id: id});
        res.status(200).json({msg: "Task Deleted Successfully", deletedTask});
    } catch (err) {
        res.status(500).json({msg: "Internal Server Error", err});
    }
})

module.exports = {
    taskRouter
}