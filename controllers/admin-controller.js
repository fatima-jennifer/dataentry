const User = require("../models/user-model");
const Contact = require("../models/contact-model");
const Student = require("../models/studentdata-model");
//const { AdminStudents } = require("../client/src/pages/Admin-Students");

const getAllUsers = async (req,res) => {
try{
const users = await User.find({}, { password: 0});
console.log(users);
if(!users || users.length === 0) {
    return res.status(404).json({ message: "No Users Found"});
}
return res.status(200).json(users);
} catch(error) {
    next(error);
}
};

const getUserById = async (req,res) => {
    try {
          const id = req.params.id;
         const data =  await User.findOne({_id: id}, {password: 0 });
          return res.status(200).json(data);
    }catch(error) {
        next(error);
    }
    };
    
const updateUserById = async(req,res) => {
    try {
        const id = req.params.id;
        const updatedUserData = req.body;
        const updatedData = await User.updateOne({_id: id},
             {
            $set: updatedUserData,
        }
    );
    return res.status(200).json(updatedData);
    } catch (error){
        next(error);
    }
}
    
const deleteUserById = async (req,res) => {
try {
      const id = req.params.id;
      await User.deleteOne({_id: id});
      return res.status(200).json({message:"User Deleted Successfully"});
}catch(error) {
    next(error);
}
};

const getAllContacts = async (req, res) => {
    try{
        const contacts = await Contact.find();
        console.log(contacts);
        if(!contacts || contacts.length === 0) {
            return res.status(404).json({message: "No contacts Found"});
        }
        return res.status(200).json(contacts);
    } catch(error) {
        next(error);
    }
};

const getContactsById = async (req,res) => {
    try {
          const id = req.params.id;
         const data =  await User.findOne({_id: id});
          return res.status(200).json(data);
    }catch(error) {
        next(error);
    }
    };
    
const getAllStudents = async (req,res) => {
    try{
        const students = await Student.find({});
        console.log(students);
        if(!students || students.length === 0) {
            return res.status(404).json({message: "No Students data Found"});
        }
        return res.status(200).json(students);
    }catch(error) {
        next(error);
    }
};

const getStudentsById = async (req,res) => {
    try {
          const id = req.params.id;
         const data =  await Student.findOne({_id: id});
          return res.status(200).json(data);
    }catch(error) {
        next(error);
    }
    };
    
const updateStudentsById = async(req,res) => {
    try {
        const id = req.params.id;
        const updatedStudentsData = req.body;
        const updatedData = await Student.updateOne({_id:id},
             {
            $set: updatedStudentsData,
        }
    );
    return res.status(200).json(updatedData);
    } catch (error){
        next(error);
    }
}
    
const deleteStudentsById = async (req,res) => {
try {
      const id = req.params.id;
      await Student.deleteOne({_id: id});
      return res.status(200).json({message:"Students Deleted Successfully"});
}catch(error) {
    next(error);
}
}; 


module.exports = { getAllUsers, getUserById,  updateUserById , deleteUserById, 
     getAllContacts, getContactsById, 
     getAllStudents, getStudentsById , updateStudentsById, deleteStudentsById };