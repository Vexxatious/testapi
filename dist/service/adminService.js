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
const adminDao_1 = __importDefault(require("../data/adminDao"));
function createAdmin(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const admin = yield adminDao_1.default.createAdmin(data);
        return admin;
    });
}
function findAllAdmins() {
    return __awaiter(this, void 0, void 0, function* () {
        const admins = yield adminDao_1.default.findAllAdmins();
        return admins;
    });
}
function findAdminById(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const admin = yield adminDao_1.default.findAdminById(data);
        return admin;
    });
}
exports.default = {
    createAdmin,
    findAllAdmins,
    findAdminById,
};
//# sourceMappingURL=adminService.js.map