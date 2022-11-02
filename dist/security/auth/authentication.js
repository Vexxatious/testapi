"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signToken = exports.verifyToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: '/Users/sergio/Developer/sego-starter-kit-b-ts/.env' });
function verifyToken(token) {
    let secret = '';
    if (process.env.ACCESS_TOKEN === undefined) {
        console.log('Secret is unfined');
    }
    else {
        secret = process.env.ACCESS_TOKEN;
    }
    var payload = (0, jsonwebtoken_1.verify)(token, secret);
    return payload;
}
exports.verifyToken = verifyToken;
function signToken(user, timeString) {
    let secret = '';
    if (process.env.ACCESS_TOKEN === undefined) {
        console.log('Secret is unfined');
    }
    else {
        secret = process.env.ACCESS_TOKEN;
    }
    var token = (0, jsonwebtoken_1.sign)(user, secret, {
        expiresIn: timeString,
    });
    return token;
}
exports.signToken = signToken;
//# sourceMappingURL=authentication.js.map