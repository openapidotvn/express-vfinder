export default class CustomError extends Error {
  constructor(message, code, name, status) {
    super(message);

    this.name = name || this.constructor.name;

    Error.captureStackTrace(this, this.constructor);

    this.code = code || 500;
    this.status = status || code || 500;
  }
}
