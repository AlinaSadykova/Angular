const mongoose = require("mongoose")
const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description:{
        type: String,
        default: ""
    },
    completed:{
        type: Boolean,
        default: false
    }
}, {timestamps:true});
 
mongoose.connect("mongodb://localhost:27017/rtapi", {useNewUrlParser: true}, (errs)=>console.log(errs));
const Tasks = mongoose.model("task", TaskSchema);

module.exports = Tasks;