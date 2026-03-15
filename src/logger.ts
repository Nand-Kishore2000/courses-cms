export class Logger {
    
    warn(message:any, ...args:any){
        const currentTimestamp = new Date().toISOString();
        console.log(`[${currentTimestamp}] [warn] ${message}`, ...args)
    }
    info(message:any, ...args:any){
        const currentTimestamp = new Date().toISOString();
        console.log(`[${currentTimestamp}] [info] ${message}`, ...args)
    }

    debug(message:any, ...args:any){

        const currentTimestamp = new Date().toISOString();
        console.log(`[${currentTimestamp}] [debug]  ${message}`, ...args)
    }
}