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
const authentication_1 = require("../security/auth/authentication");
const resultResponse_1 = require("../util/resultResponse");
const authenticator = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = req.header('Authorization')
            ? req.header('Authorization').split('Bearer ')[1]
            : null;
        if (token !== null) {
            const payload = (0, authentication_1.verifyToken)(token);
            if (payload) {
                next();
            }
        }
        else {
            (0, resultResponse_1.errorDataResponse)('Authentication token missing', res, 400);
        }
    }
    catch (error) {
        next(error);
    }
});
exports.default = { authenticator };
//# sourceMappingURL=authenticator.js.map