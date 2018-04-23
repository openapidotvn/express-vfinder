import CustomError from './custom-error';

export default class NotFoundError extends CustomError {
  constructor(message) {
    super(message || 'Not found', 404, 'NotFoundError');
  }
}
