import  express from "express";
import { handleLoginAdmin } from "./controllers/admin_login";

const app = express()
const port = process.env.PORT || 3000;

app.use(express.json());

//login admin
app.get("/login",handleLoginAdmin);

app.get("/get",(req, res)=>{
    console.log("I got a request");
    res.send("Hello world")
})

app.listen(port,()=>{
    console.log("Listening on localhost:",port)
},)
