"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const dotenv_1 = require("dotenv");
const path_1 = require("path");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userService_1 = __importDefault(require("../services/userService"));
(0, dotenv_1.config)({ path: (0, path_1.resolve)(__dirname, "../../.env") });
class AuthController {
    static async login(req, res) {
        try {
            const { email, password } = req.body;
            const userService = tsyringe_1.container.resolve(userService_1.default);
            const user = await userService.checkUserCredentials(email, password);
            if (!user || !user.id || !user.name) {
                return res.status(401).json({
                    status: 401,
                    message: "Invalid credentials"
                });
            }
            const token = AuthController.generateToken({ id: user.id, username: user.name });
            res.status(200).json({
                token
            });
        }
        catch (err) {
            res.status(401).json({
                status: 401,
                message: err.message
            });
        }
    }
    static async register(req, res) {
        try {
            const { name, email, password } = req.body;
            const userService = tsyringe_1.container.resolve(userService_1.default);
            const user = await userService.createUser({ name, email, password });
            res.status(201).json({
                status: 201,
                user
            });
        }
        catch (err) {
            res.status(400).json({
                status: 400,
                message: err.message
            });
        }
    }
    static generateToken(user) {
        const secret = process.env.JWT_SECRET;
        if (!secret) {
            throw new Error("Please provide a JWT secret!");
        }
        const token = jsonwebtoken_1.default.sign(user, secret, { expiresIn: "1h" });
        return token;
    }
}
exports.default = AuthController;
