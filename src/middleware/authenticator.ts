import { NextFunction, Request, response, Response } from 'express';
import { verifyToken } from '../security/auth/authentication';
import { errorDataResponse } from '../util/resultResponse';

const authenticator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.header('Authorization')
      ? req.header('Authorization')!.split('Bearer ')[1]
      : null;

    if (token !== null) {
      const payload = verifyToken(token);
      if (payload) {
        next();
      }
    } else {
      errorDataResponse('Authentication token missing', res, 400);
    }
  } catch (error) {
    next(error);
  }
};

export default { authenticator };
