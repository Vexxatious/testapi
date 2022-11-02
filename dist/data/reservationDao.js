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
function createReservation(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const reservation = yield prisma.reservation.create({
            data: data,
        });
        console.log(`Reservation with date${data.date} added`);
        return reservation.id;
    });
}
function findAllReservations() {
    return __awaiter(this, void 0, void 0, function* () {
        const reservations = yield prisma.reservation.findMany({
            include: {
                player: {
                    select: {
                        name: true,
                    },
                },
            },
        });
        return reservations;
    });
}
function findReservationById(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const reservation = yield prisma.reservation.findUnique({
            where: {
                id: data,
            },
            include: {
                player: {
                    select: {
                        name: true,
                    },
                },
            },
        });
        return reservation;
    });
}
function findReservationsByPitchId(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const reservation = yield prisma.reservation.findMany({
            where: {
                pitchId: data,
            },
            include: {
                player: {
                    select: {
                        name: true,
                    },
                },
            },
        });
        return reservation;
    });
}
function findReservationsByPlayerId(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const reservation = yield prisma.reservation.findMany({
            where: {
                playerId: data,
            },
            include: {
                player: {
                    select: {
                        name: true,
                    },
                },
            },
        });
        return reservation;
    });
}
exports.default = {
    createReservation,
    findAllReservations,
    findReservationById,
    findReservationsByPitchId,
    findReservationsByPlayerId,
};
//# sourceMappingURL=reservationDao.js.map