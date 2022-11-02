import { Player } from '.prisma/client';

import bcrptHasher from '../security/bcryptHasher';
import playerDao from '../data/playerDao';
import { signToken } from '../security/auth/authentication';
import { DateTime, Interval } from 'luxon';
import { UserType } from 'userType';

async function createPlayer(data: Player) {
  let hashedPassword = bcrptHasher.hash(data.password);
  data.password = hashedPassword;

  const message = await playerDao.createPlayer(data);
  return message;
}

async function loginManager(data: UserType) {
  let isAuthenticated = false;
  const player: Player = await playerDao.findPlayerByUsername(data);

  if (!player) {
    return player;
  }

  if (!bcrptHasher.decode(data.password, player.password)) {
    throw new Error('User not registered');
  }
  var token = signToken(player, '48h');

  return 'Bearer ' + token;
}

export default {
  createPlayer,
  loginManager,
};
