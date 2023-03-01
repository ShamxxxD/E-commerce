"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const database_1 = require("./config/database/database");
const index_1 = __importDefault(require("./routes/index"));
require('dotenv').config(); // Add this line to use dotenv
const app = (0, express_1.default)();
const port = 3000;
(0, database_1.connectDatabase)();
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
// Route Init
(0, index_1.default)(app);
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
