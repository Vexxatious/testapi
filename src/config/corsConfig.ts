import { NextFunction, Request, Response } from 'express';

function corsConfig(req: Request, res: Response, next: NextFunction) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Methods',
    'GET,HEAD,OPTIONS,POST,PUT,DELETE'
  );
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization, authorization'
  );

  res.header(
    'Access-Control-Expose-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization,authorization'
  );
  next();
}

export default { corsConfig };
