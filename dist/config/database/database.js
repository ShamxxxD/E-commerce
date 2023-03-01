"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDatabase = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { DB_USERNAME, DB_PASSWORD } = process.env;
const DB_URI = `mongodb+srv://shamdev2811:Thong281197@cluster0.kmq0ffu.mongodb.net/test`;
// const DB_URI = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.kmq0ffu.mongodb.net/test`;
const connectDatabase = async () => {
    try {
        await mongoose_1.default.connect(DB_URI);
        console.log('Database connected!');
    }
    catch (error) {
        console.log(error);
    }
};
exports.connectDatabase = connectDatabase;
