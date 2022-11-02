import express from 'express';
import type { NextFunction, Request, Response } from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import envalid from './config/envalidConfig';
import userApi from './api/userApi';
import authenticator from './middleware/authenticator';
import corsConfig from './config/corsConfig';
var morgan = require('morgan');
var cors = require('cors');
var app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger_output.json');
import dotenv from 'dotenv';

app.use(cors());

dotenv.config();

//validation
envalid();

//middleware
app.use(helmet());
app.use(morgan('combined'));
app.use(corsConfig.corsConfig);
app.use(bodyParser.json());

//route
app.use('/user', userApi.router);
app.use(authenticator.authenticator);

//handler
app.use(function errorHandler(
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction
) {
  response.status(400).send({ message: error.message }).end();
  next();
});

app.listen(process.env.PORT, () => {
  console.log(
    `🚀 Server ready at: http://localhost:${process.env.PORT} `
  );
});

export {};
