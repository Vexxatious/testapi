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
function createPitchRating(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const pitchRating = yield prisma.pitchRating.create({
            data: data,
        });
        console.log(`Rating added`);
        return pitchRating.id;
    });
}
function findAllPitchRatings() {
    return __awaiter(this, void 0, void 0, function* () {
        const pitchRatings = yield prisma.pitchRating.findMany({});
        return pitchRatings;
    });
}
function findPitchRatingById(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const pitchRating = yield prisma.pitchRating.findUnique({
            where: {
                id: data,
            },
        });
        return pitchRating;
    });
}
function findPitchRatingsByPitchId(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const pitchRating = yield prisma.pitchRating.findMany({
            where: {
                pitchId: data,
            },
            include: {
                player: true,
            },
        });
        return pitchRating;
    });
}
exports.default = {
    createPitchRating,
    findAllPitchRatings,
    findPitchRatingById,
    findPitchRatingsByPitchId,
};
//# sourceMappingURL=pitchRatingDao.js.map