"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function createTeam(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const team = yield prisma.team.create({
            data: data,
        });
        console.log(`Team with name ${data.name} added`);
        return team.id;
    });
}
function findAllTeams() {
    return __awaiter(this, void 0, void 0, function* () {
        const teams = yield prisma.team.findMany({});
        return teams;
    });
}
function findTeamById(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const team = yield prisma.team.findUnique({
            where: {
                id: data,
            },
        });
        return team;
    });
}
exports.default = { createTeam, findAllTeams, findTeamById };
//# sourceMappingURL=teamDao.js.map