"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const helmet_1 = __importDefault(require("helmet"));
const envalidConfig_1 = __importDefault(require("./config/envalidConfig"));
const userApi_1 = __importDefault(require("./api/userApi"));
const authenticator_1 = __importDefault(require("./middleware/authenticator"));
const corsConfig_1 = __importDefault(require("./config/corsConfig"));
var morgan = require('morgan');
var cors = require('cors');
var app = (0, express_1.default)();
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger_output.json');
const dotenv_1 = __importDefault(require("dotenv"));
app.use(cors());
dotenv_1.default.config();
(0, envalidConfig_1.default)();
app.use((0, helmet_1.default)());
app.use(morgan('combined'));
app.use(corsConfig_1.default.corsConfig);
app.use(body_parser_1.default.json());
app.use('/user', userApi_1.default.router);
app.use(authenticator_1.default.authenticator);
app.use(function errorHandler(error, request, response, next) {
    response.status(400).send({ message: error.message }).end();
    next();
});
app.listen(process.env.PORT, () => {
    console.log(`🚀 Server ready at: http://localhost:${process.env.PORT} `);
});
//# sourceMappingURL=index.js.map