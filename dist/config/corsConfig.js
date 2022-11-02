"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function corsConfig(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, authorization');
    res.header('Access-Control-Expose-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization,authorization');
    next();
}
exports.default = { corsConfig };
//# sourceMappingURL=corsConfig.js.map