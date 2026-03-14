export class Logger {
    
    warn(message:any){
        const currentTimestamp = new Date().toISOString();
        console.log(`[${currentTimestamp}] [warn] ${message}`)
    }
    info(message:any){
        const currentTimestamp = new Date().toISOString();
        console.log(`[${currentTimestamp}] [info] ${message}`)
    }

    debug(message:any){

        const currentTimestamp = new Date().toISOString();
        console.log(`[${currentTimestamp}] [debug]  ${message}`)
    }
}