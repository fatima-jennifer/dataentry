require ("dotenv").config();
const express =require("express");
const app = express();
const cors = require("cors");
const authRoute = require("./router/auth-router");
const studentRoute = require("./router/studentdata-router");
const contactRoute = require("./router/contact-router");
const adminRoute = require("./router/admin-router");
const connectDb = require("./utils/db");

const corsOptions = {
    origin: 5173,
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/form", studentRoute);
app.use("/api/form", contactRoute);
app.use("/api/admin",adminRoute);
//app.use(errorMiddleware);

const PORT=5000;

connectDb().then(() => {
app.listen(PORT, () => {
    console.log(`server is running at port: ${PORT}`);
});
});