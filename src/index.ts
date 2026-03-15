import  express from "express";
import { handleLoginAdmin } from "./controllers/admin_login";
import { getCourse, updateCourse, deleteCourse, createCourse } from "./controllers/course";
import { Logger } from "./logger";

const app = express()
const port = process.env.PORT || 3000;
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

app.listen(port,()=>{
    log.info("Listening on localhost:",port)
},)
