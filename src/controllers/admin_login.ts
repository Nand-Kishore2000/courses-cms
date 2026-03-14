import { Logger } from "../logger";


export function handleLoginAdmin(req:any,res:any){
    const log =new Logger();
    try {
        log.info("This is my first message");
        res.send("This is new message");
    } catch (error) {
        log.info("This is my first message");
        res.json({"message":"this is first message from the error"})
        
    }



}