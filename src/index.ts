import  express from "express";
import { connectDB } from "./config/db";
import { getCourse, updateCourse, deleteCourse, createCourse } from "./controllers/course";
import { Logger } from "./logger";
import dotenv from "dotenv";
import 'dotenv'
dotenv.config();

const app = express()
const port = process.env.PORT || 8080;
app.use(express.json());

const log = new Logger();


app.get("/",(req, res)=>{
    
})
//login admin
// app.get("/login",handleLoginAdmin);
app.post("/create-course", createCourse);
app.get("/get-course",getCourse);
app.patch("/update-course", updateCourse);
app.delete("/delete/:id",deleteCourse);




async function startServer(){
    try {
        await connectDB();
        app.listen(port,()=>{
        log.info("Listening on localhost:",port)
},)
    } catch (error) {
        log.info("Error while starting server on localhost:",error)

        
    }
}

startServer();