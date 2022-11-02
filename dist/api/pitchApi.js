"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
Promise.resolve().then(() => __importStar(require('dotenv/config')));
const pitchService_1 = __importDefault(require("../service/pitchService"));
const resultResponse_1 = require("../util/resultResponse");
router.post('/createPitch', (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    let pitch = request.body;
    try {
        let message = yield pitchService_1.default.createPitch(pitch);
        (0, resultResponse_1.successDataResponse)(message, response, 200);
    }
    catch (error) {
        next(error);
    }
}));
router.get('/findAllPitches', (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pitches = yield pitchService_1.default.findAllPitches();
        (0, resultResponse_1.successDataResponse)(pitches, response, 200);
    }
    catch (error) {
        next(error);
    }
}));
router.get('/findPitchById/:id', (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = request.params['id'];
        const pitch = yield pitchService_1.default.findPitchById(id);
        (0, resultResponse_1.successDataResponse)(pitch, response, 200);
    }
    catch (error) {
        next(error);
    }
}));
exports.default = { router };
//# sourceMappingURL=pitchApi.js.map