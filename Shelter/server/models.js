const mongoose = require("mongoose");
const unique = require("mongoose-unique-validator");

mongoose.connect("mongodb://localhost:27017/meanbelt", {
    useNewUrlParser: true
}, (errs) => console.log(errs || 'db = gucci'));


const PetsSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: [3, "You need longer name"],
        required: [true, " Pet Name is required"],
        unique: [true, "Pet already exists"] //VERY important for validating
    },
    breed: {
        type: String,
        minlength: [3, "Pet Type is too short"],
        // required: [true, "Pet Type is required"]
    },
    description: {
        type: String,
        minlength: [3, "Description is too short"],
        
    },
    skills:{
        type: [String],
        maxlength: [3, "You can only add 3 skills"]
    }
    // {
    //     type: Array,
    //     maxItems: 3,
    //     items: {
    //        type: String
    //       }
    // skills :[String]
       
    
})

const Pets = mongoose.model('pet', PetsSchema);
PetsSchema.plugin(unique, {message: "This is not Unique Pet"})// unique validator

module.exports = Pets;