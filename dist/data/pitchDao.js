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
function createPitch(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const pitch = yield prisma.pitch.create({
            data: data,
        });
        console.log(`Pitch with name ${data.name} added`);
        return pitch.id;
    });
}
function findAllPitches() {
    return __awaiter(this, void 0, void 0, function* () {
        const pitches = yield prisma.pitch.findMany({});
        return pitches;
    });
}
function findPitchById(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const pitch = yield prisma.pitch.findUnique({
            where: {
                id: data,
            },
        });
        return pitch;
    });
}
exports.default = { createPitch, findAllPitches, findPitchById };
//# sourceMappingURL=pitchDao.js.map