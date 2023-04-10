class AppError extends Error {
  constructor(message, statusCode) {
    console.log("hello");
    super(message);
    this.statusCode = statusCode;
    console.log(this.statusCode);
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}
module.exports = AppError;