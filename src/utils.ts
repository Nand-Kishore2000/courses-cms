
export class CustomError extends Error {

    public statusCode;
    public status;
    public isOperational;

  constructor(message:string, statusCode:number) {
    super(message);

    this.statusCode  = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true; // Mark as a predictable "operational" error

    Error.captureStackTrace(this, this.constructor); // Keep stack trace clean
  }
}
