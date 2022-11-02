import { UserType } from 'userType';
import { Player } from '.prisma/client';
import express, { NextFunction, Request, Response } from 'express';
var router = express.Router();
import playerService from '../service/playerService';
import {
  errorDataResponse,
  successHeaderResponse,
} from '../util/resultResponse';

router.post(
  '/signUp',
  async (request: Request, response: Response, next: NextFunction) => {
    let player: Player = request.body;

    try {
      let message = await playerService.createPlayer(player);
      const token = await playerService.loginManager(player);

      if (!token) {
        errorDataResponse('Wrong username or password', response, 403);
      }
      successHeaderResponse({ authorization: token }, response, 200);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/login',

  async (request: Request, response: Response, next: NextFunction) => {
    try {
      let player: UserType = request.body;
      const token = await playerService.loginManager(player);

      if (!token) {
        errorDataResponse('Wrong username or password', response, 403);
      }
      successHeaderResponse({ authorization: token }, response, 200);
    } catch (error) {
      next(error);
    }
  }
);

export default { router };
