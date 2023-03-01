"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const schema = new Schema({
    name: String,
    price: String,
    image: Array,
    category: String,
    netWeight: String,
    discount: String,
    description: String,
    sku: String
});
var Products = mongoose_1.default.model('Products', schema, 'products');
exports.default = Products;
