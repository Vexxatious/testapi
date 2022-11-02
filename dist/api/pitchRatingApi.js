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
const pitchRatingService_1 = __importDefault(require("../service/pitchRatingService"));
const resultResponse_1 = require("../util/resultResponse");
router.post('/createPitchRating', (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    let pitchRating = request.body;
    try {
        let message = yield pitchRatingService_1.default.createPitchRating(pitchRating);
        (0, resultResponse_1.successDataResponse)(message, response, 200);
    }
    catch (error) {
        next(error);
    }
}));
router.get('/findAllPitchRatings', (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pitchRatings = yield pitchRatingService_1.default.findAllPitchRatings();
        (0, resultResponse_1.successDataResponse)(pitchRatings, response, 200);
    }
    catch (error) {
        next(error);
    }
}));
router.get('/findPitchRatingById/:id', (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = request.params['id'];
        const pitch = yield pitchRatingService_1.default.findPitchRatingById(id);
        (0, resultResponse_1.successDataResponse)(pitch, response, 200);
    }
    catch (error) {
        next(error);
    }
}));
router.get('/findPitchRatingsByPitchId/:id', (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = request.params['id'];
        const pitchRating = yield pitchRatingService_1.default.findPitchRatingsByPitchId(id);
        (0, resultResponse_1.successDataResponse)(pitchRating, response, 200);
    }
    catch (error) {
        next(error);
    }
}));
exports.default = { router };
//# sourceMappingURL=pitchRatingApi.js.map