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
const express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
const teamService_1 = __importDefault(require("../service/teamService"));
const resultResponse_1 = require("../util/resultResponse");
router.post('/createTeam', (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    let reservation = request.body;
    try {
        let message = yield teamService_1.default.createTeam(reservation);
        (0, resultResponse_1.successDataResponse)(message, response, 200);
    }
    catch (error) {
        next(error);
    }
}));
router.get('/findAllTeams', (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const teams = yield teamService_1.default.findAllTeams();
        (0, resultResponse_1.successDataResponse)(teams, response, 200);
    }
    catch (error) {
        next(error);
    }
}));
router.get('/findTeamById/:id', (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = request.params['id'];
        const team = yield teamService_1.default.findTeamById(id);
        (0, resultResponse_1.successDataResponse)(team, response, 200);
    }
    catch (error) {
        next(error);
    }
}));
exports.default = { router };
//# sourceMappingURL=teamApi.js.map