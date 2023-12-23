import { Request, Response, NextFunction } from 'express';

function requestLogger(req: Request, res: Response, next: NextFunction) {
  const timestamp = new Date().toISOString();
  const { method, originalUrl } = req;
  console.log(`[${timestamp}] ${method} ${originalUrl}`);
  next();
}

export default requestLogger;
