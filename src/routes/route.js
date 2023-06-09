const express = require("express") // Requiring express framework.
const router = express.Router()
const Taskcontroller = require("../controllers/Taskcontroller") //importing controller



//--------------------API for Create Task----------------------------------------------//
router.post("/createTask", Taskcontroller.createTask)

//-------------------API for get  particular Task---------------------------------------//
router.get("/Task/:TaskId", Taskcontroller.getTaskById)

//------------------API for get/read All Task---------------------------------------------//
router.get("/Task", Taskcontroller.getTasks);

//------------------API for deleting particular Task-------------------------------------//
router.delete("/Task/:TaskId",Taskcontroller.deleteTask)

//-----------------API for Updating particular Task-----------------------------------//
router.put("/updatedTask/:TaskId",Taskcontroller.UpdateTask)


module.exports = router