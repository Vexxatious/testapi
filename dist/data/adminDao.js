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
function createAdmin(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const admin = yield prisma.admin.create({
            data: data,
        });
        console.log(`Admin with name ${data.username} added`);
        return admin.id;
    });
}
function findAllAdmins() {
    return __awaiter(this, void 0, void 0, function* () {
        const admins = yield prisma.admin.findMany({});
        return admins;
    });
}
function findAdminById(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const admin = yield prisma.admin.findUnique({
            where: {
                id: data,
            },
            include: {
                Pitch: true,
            },
        });
        return admin;
    });
}
exports.default = { createAdmin, findAllAdmins, findAdminById };
//# sourceMappingURL=adminDao.js.map