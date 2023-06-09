const { default: mongoose } = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId

//-----------------------Creating Task Schema(structure for database)------------

// define the Task schema
const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  
  due_date: {
    type: String,
    required: true
  },
  status:{
    type:String,
    required:true
  }

},{ timestamps: true }
 );

// define the Task model
module.exports = mongoose.model("Task",  taskSchema);



