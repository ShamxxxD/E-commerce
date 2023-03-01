"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_route_1 = __importDefault(require("./product.route"));
function route(app) {
    app.get('/', product_route_1.default);
}
exports.default = route;
