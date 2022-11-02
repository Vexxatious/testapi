"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const saltRounds = 10;
function hash(password) {
    return bcrypt_1.default.hashSync(password, saltRounds);
}
function decode(password, hash) {
    return bcrypt_1.default.compareSync(password, hash);
}
exports.default = { hash, decode };
//# sourceMappingURL=bcryptHasher.js.map