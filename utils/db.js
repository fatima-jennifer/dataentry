const mongoose = require("mongoose");

const URI =  process.env.MONGODB_URI;
//mongoose.connect(URI);

const connectDb = async () =>{
    try{
        await mongoose.connect(URI);
        console.log("CONNECTION SUCCESSFUL TO DB");
    } catch (error) {
        console.error("DATABASE CONNECTION FAILED");
        process.exit(0);
    }
};

module.exports = connectDb;