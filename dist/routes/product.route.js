"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const Product_controller_1 = __importDefault(require("../controllers/Product.controller"));
router.use('/', Product_controller_1.default.index);
exports.default = router;
