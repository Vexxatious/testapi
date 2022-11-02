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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const teamDao_1 = __importDefault(require("../data/teamDao"));
function createTeam(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const message = yield teamDao_1.default.createTeam(data);
        if (message) {
        }
        return message;
    });
}
function findAllTeams() {
    return __awaiter(this, void 0, void 0, function* () {
        const teams = yield teamDao_1.default.findAllTeams();
        return teams;
    });
}
function findTeamById(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const team = yield teamDao_1.default.findTeamById(data);
        return team;
    });
}
exports.default = { createTeam, findAllTeams, findTeamById };
//# sourceMappingURL=teamService.js.map