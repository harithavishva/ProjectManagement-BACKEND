const mongoose = require('mongoose');
const schema = mongoose.Schema;
const taskschema = new schema(
    {
           title:{
            type:String,
            require:true
           },
           description:{
            type:String,
            require:true
           },
    },
    { timestamps:true}
);

module.exports = mongoose.model("Task",taskschema)