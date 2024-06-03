const {Schema, model} =require("mongoose");

const studentSchema =new Schema({
    student_id: {type: String, required: true, unique:true },
    student_name:{type:String, required: true},
    student_age:{ type:String, required: true},
    student_address:{type:String, required: true},
    student_mobileno:{type:String, required: true},
    student_disease:{type:String, required: true},
});

const Student = new model("Student", studentSchema);
module.exports = Student;