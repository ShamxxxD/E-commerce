"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_model_1 = __importDefault(require("../models/product.model"));
class ProductController {
    index(req, res) {
        product_model_1.default.find({}, function (err, product) {
            res.json(product);
        });
    }
}
exports.default = new ProductController();
