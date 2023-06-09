const NFTsModel = require("../Models/TaskModel") // importing model
const { isValidObjectId } = require("mongoose") // importing mongoose

//-------------Function to Create Task---------------------------------------//

const createTask = async function (req, res) {

    try {

        let data = req.body;
        let newdata = await TaskModel.create(data);

        return res.status(201).send({ msg: newdata })
    }
    catch (error) {
        return res.status(500).send({ msg: error.message })
    }
}

//-------------------Function to get particular Task by its Id-----------------------//

const getTaskById = async function (req, res) {
    try {
        const TaskId = req.params.TaskId;
        const Tasks = await TaskModel.findOne({ _id: TaskId, isDeleted: false, })
        if (!Tasks) return res.status(404).send({ msg: "No Task found" })
        return res.status(200).send({ status: true, message: "Success", data: Tasks });
    } catch (err) {
        return res.status(500).send({ status: false, message: err.message });
    }
};

//------------------------- Function to get all Tasks----------------------//
const getTasks = async function (req, res) {

    try {

        let data = req.query
        data.isdeleted = false
        let Tasks = await TaskModel.find(data)
        if (Tasks) {
            return res.status(200).send({ msg: Tasks })
        } else return res.status(404).send("Data of task not found")
    } catch (error) {
        return res.status(500).send({ msg: error.message })
    }
}

//--------------------------Function to delete particular Task---------------------//

const deleteTask = async function (req, res) {
    try {
        const TaskId= req.params.TaskId

        if (!TaskId) return res.status(400).send({ status: false, message: "TaskId is required." })

        const deleteTask = await TaskModel.findOneAndUpdate(
            { _id: TaskId, isDeleted: false },
            { isDeleted: true },
            { new: true })

        if (!deleteTask) return res.status(404).send({ status: false, message: "Task you are trying to fetch is unavailable OR already deleted" })

        return res.status(200).send({ status: true, message: "Task is deleted " })

    } catch (err) {
        return res.status(500).send({ status: false, msg: err.message })
    }
}

//--------------------------Function to update particular Task-----------------------//
const UpdateTask = async function (req, res) {

    try {
        let data = req.body;
        let TaskId = req.params.TaskId;

        if (Object.keys(data).length == 0)
            return res.status(400).send({ status: false, msg: 'Enter Task Details' })
        if (!TaskId)
            return res.status(400).send({ status: false, msg: 'TaskId is missing' })

        let findTaskId = await TaskModel .findById(TaskId);

        if (findTaskId.isdeleted == true) {
            return res.status(400).send({ status: false, msg: "Task is deleted" })

        }

        const Updateddata = await TaskModel.findOneAndUpdate({ _id: TaskId, isDeleted: false }, data, { new: true })
        if (!Updateddata) { return res.status(404).send({ status: false, msg: "No task found" }) }
        return res.status(200).send({ status: true, data: Updateddata })

    } catch (error) {
        res.status(500).send({ status: false, message: error.message })
    }
}


module.exports = { createTask, getTaskById, getTasks, deleteTask,UpdateTask };
