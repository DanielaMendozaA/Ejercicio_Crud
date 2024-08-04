"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = require("dotenv");
const path_1 = require("path");
(0, dotenv_1.config)({ path: (0, path_1.resolve)(__dirname, '../.env') });
const authJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        const secret = process.env.JWT_SECRET;
        if (!secret) {
            res.status(500).json({
                status: 500,
                message: 'secret not found'
            });
            return;
        }
        jsonwebtoken_1.default.verify(token, secret, (err, user) => {
            if (err) {
                res.status(403).json({
                    status: 403,
                    message: 'Forbidden'
                });
                return;
            }
            req.user = user;
            next();
        });
    }
    else {
        res.status(401).json({
            status: 401,
            message: 'Unauthorized'
        });
    }
};
exports.default = authJWT;
