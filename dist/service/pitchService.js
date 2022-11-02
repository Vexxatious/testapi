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
const pitchDao_1 = __importDefault(require("../data/pitchDao"));
function createPitch(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const message = yield pitchDao_1.default.createPitch(data);
        return message;
    });
}
function findAllPitches() {
    return __awaiter(this, void 0, void 0, function* () {
        const pitches = yield pitchDao_1.default.findAllPitches();
        return pitches;
    });
}
function findPitchById(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const pitch = yield pitchDao_1.default.findPitchById(data);
        return pitch;
    });
}
exports.default = { createPitch, findAllPitches, findPitchById };
//# sourceMappingURL=pitchService.js.map