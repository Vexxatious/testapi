"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.successHeaderResponse = exports.errorResponse = exports.successDataResponse = exports.errorDataResponse = void 0;
function successDataResponse(data, response, status) {
    response.send(data).status(status).end();
}
exports.successDataResponse = successDataResponse;
function successHeaderResponse(data, response, status) {
    response.status(status).header(data).end();
}
exports.successHeaderResponse = successHeaderResponse;
function errorResponse(response, status) {
    response.status(status).end();
}
exports.errorResponse = errorResponse;
function errorDataResponse(errorMessage, response, status) {
    response.status(status).send({ message: errorMessage }).end();
}
exports.errorDataResponse = errorDataResponse;
//# sourceMappingURL=resultResponse.js.map