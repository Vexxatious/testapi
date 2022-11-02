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
const playerService_1 = __importDefault(require("../service/playerService"));
const resultResponse_1 = require("../util/resultResponse");
router.post('/signUp', (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    let player = request.body;
    try {
        let message = yield playerService_1.default.createPlayer(player);
        const token = yield playerService_1.default.loginManager(player);
        if (!token) {
            (0, resultResponse_1.errorDataResponse)('Wrong username or password', response, 403);
        }
        (0, resultResponse_1.successHeaderResponse)({ authorization: token }, response, 200);
    }
    catch (error) {
        next(error);
    }
}));
router.post('/login', (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let player = request.body;
        const token = yield playerService_1.default.loginManager(player);
        if (!token) {
            (0, resultResponse_1.errorDataResponse)('Wrong username or password', response, 403);
        }
        (0, resultResponse_1.successHeaderResponse)({ authorization: token }, response, 200);
    }
    catch (error) {
        next(error);
    }
}));
exports.default = { router };
//# sourceMappingURL=userApi.js.map