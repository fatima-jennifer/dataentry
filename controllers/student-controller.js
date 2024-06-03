const Student = require("../models/studentdata-model");

const studentForm = async (req, res) => {
    try{
        const response = req.body;
        await Student.create(response);
        return res.status(200).json({ message: "Message send successfully"});
    }catch(error){
        return res.status(500).json({ message: "Message not delivered"});
    }
};


module.exports = studentForm;