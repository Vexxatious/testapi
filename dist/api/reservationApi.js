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
const express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
const reservationService_1 = __importDefault(require("../service/reservationService"));
const resultResponse_1 = require("../util/resultResponse");
router.post('/createReservation', (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    let reservation = request.body;
    try {
        let message = yield reservationService_1.default.createReservation(reservation);
        (0, resultResponse_1.successDataResponse)(message, response, 200);
    }
    catch (error) {
        next(error);
    }
}));
router.get('/findAllReservations', (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const reservations = yield reservationService_1.default.findAllReservations();
        (0, resultResponse_1.successDataResponse)(reservations, response, 200);
    }
    catch (error) {
        next(error);
    }
}));
router.get('/findReservationById/:id', (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = request.params['id'];
        const reservation = yield reservationService_1.default.findReservationById(id);
        (0, resultResponse_1.successDataResponse)(reservation, response, 200);
    }
    catch (error) {
        next(error);
    }
}));
router.get('/findReservationsByPitchId/:id', (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = request.params['id'];
        const reservation = yield reservationService_1.default.findReservationsByPitchId(id);
        (0, resultResponse_1.successDataResponse)(reservation, response, 200);
    }
    catch (error) {
        next(error);
    }
}));
router.get('/findReservationsByPlayerId/:id', (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = request.params['id'];
        const reservation = yield reservationService_1.default.findReservationsByPlayerId(id);
        (0, resultResponse_1.successDataResponse)(reservation, response, 200);
    }
    catch (error) {
        next(error);
    }
}));
exports.default = { router };
//# sourceMappingURL=reservationApi.js.map