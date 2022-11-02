import { Player } from '.prisma/client';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function createPlayer(data: Player) {
  const player = await prisma.player.create({
    data: data,
  });

  return console.log(`Player with username ${data.username} added`);
}

async function findAllPlayers() {
  const players = await prisma.player.findMany({});
  return players;
}

async function findPlayerById(data: string) {
  console.log(data);
  const player: any = await prisma.player.findUnique({
    where: {
      id: data,
    },
  });

  return player;
}

async function findPlayerByUsername(data: any) {
  const player: any = await prisma.player.findUnique({
    where: {
      username: data.username,
    },
  });

  return player;
}

async function findPlayerByPassword(data: any) {
  const player: any = await prisma.player.findUnique({
    where: {
      password: data.password,
    },
  });

  return player;
}

export default {
  createPlayer,
  findAllPlayers,
  findPlayerById,
  findPlayerByUsername,
  findPlayerByPassword,
};
