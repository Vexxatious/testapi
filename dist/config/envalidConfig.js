"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const envalid_1 = require("envalid");
function envalid() {
    (0, envalid_1.cleanEnv)(process.env, {
        ACCESS_TOKEN: (0, envalid_1.str)(),
        DATABASE_URL: (0, envalid_1.str)(),
        PORT: (0, envalid_1.num)(),
    });
}
exports.default = envalid;
//# sourceMappingURL=envalidConfig.js.map