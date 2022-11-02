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
const bcryptHasher_1 = __importDefault(require("../security/bcryptHasher"));
const playerDao_1 = __importDefault(require("../data/playerDao"));
const authentication_1 = require("../security/auth/authentication");
function createPlayer(data) {
    return __awaiter(this, void 0, void 0, function* () {
        let hashedPassword = bcryptHasher_1.default.hash(data.password);
        data.password = hashedPassword;
        const message = yield playerDao_1.default.createPlayer(data);
        return message;
    });
}
function loginManager(data) {
    return __awaiter(this, void 0, void 0, function* () {
        let isAuthenticated = false;
        const player = yield playerDao_1.default.findPlayerByUsername(data);
        if (!player) {
            return player;
        }
        if (!bcryptHasher_1.default.decode(data.password, player.password)) {
            throw new Error('User not registered');
        }
        var token = (0, authentication_1.signToken)(player, '48h');
        return 'Bearer ' + token;
    });
}
exports.default = {
    createPlayer,
    loginManager,
};
//# sourceMappingURL=playerService.js.map