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
const reservationDao_1 = __importDefault(require("../data/reservationDao"));
function createReservation(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const message = yield reservationDao_1.default.createReservation(data);
        return message;
    });
}
function findAllReservations() {
    return __awaiter(this, void 0, void 0, function* () {
        const reservations = yield reservationDao_1.default.findAllReservations();
        return reservations;
    });
}
function findReservationById(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const reservation = yield reservationDao_1.default.findReservationById(data);
        return reservation;
    });
}
function findReservationsByPitchId(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const reservation = yield reservationDao_1.default.findReservationsByPitchId(data);
        return reservation;
    });
}
function findReservationsByPlayerId(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const reservation = yield reservationDao_1.default.findReservationsByPlayerId(data);
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
//# sourceMappingURL=reservationService.js.map